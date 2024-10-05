const GenUtils = require("../common/GenUtils");
const LibraryUtils = require("./LibraryUtils");
const MoneroUtils = require("./MoneroUtils");
const ThreadPool = require("./ThreadPool");
const PromiseThrottle = require("promise-throttle");
//const Request = require("request-promise");
const Axios = require("axios");

/**
 * Handle HTTP requests with a uniform interface.
 * 
 * @hideconstructor
 */
class HttpClient {
  
  /**
   * <p>Make a HTTP request.<p>
   * 
   * @param {object} request - configures the request to make
   * @param {string} request.method - HTTP method ("GET", "PUT", "POST", "DELETE", etc)
   * @param {string} request.uri - uri to request
   * @param {string|object|Uint8Array} request.body - request body
   * @param {string} request.username - username to authenticate the request (optional)
   * @param {string} request.password - password to authenticate the request (optional)
   * @param {object} request.headers - headers to add to the request (optional)
   * @param {boolean} request.resolveWithFullResponse - return full response if true, else body only (default false)
   * @param {boolean} request.rejectUnauthorized - whether or not to reject self-signed certificates (default true)
   * @param {number} request.timeout - maximum time allowed in milliseconds
   * @param {number} request.proxyToWorker - proxy request to worker thread
   * @returns {object} response - the response object
   * @returns {string|object|Uint8Array} response.body - the response body
   * @returns {number} response.statusCode - the response code
   * @returns {String} response.statusText - the response message
   * @returns {object} response.headers - the response headers
   */
  static async request(request) {
    // proxy to worker if configured
    if (request.proxyToWorker) {
      try {
        return await LibraryUtils.invokeWorker(undefined, "httpRequest", request);
      } catch (err) {
        if (err.message.length > 0 && err.message.charAt(0) === "{") {
          let parsed = JSON.parse(err.message);
          err.message = parsed.statusMessage;
          err.statusCode = parsed.statusCode;
        }
        throw err;
      }
    }

    // assign defaults
    request = Object.assign({}, HttpClient._DEFAULT_REQUEST, request);

    // validate request
    try { request.host = new URL(request.uri).host; } // hostname:port
    catch (err) { throw new Error("Invalid request URL: " + request.uri); }
    if (request.body && !(typeof request.body === "string" || typeof request.body === "object")) {
      throw new Error("Request body type is not string or object");
    }

    // initialize one task queue per host
    if (!HttpClient._TASK_QUEUES[request.host]) HttpClient._TASK_QUEUES[request.host] = new ThreadPool(1);

    // initialize one promise throttle per host
    if (!HttpClient._PROMISE_THROTTLES[request.host]) {
      HttpClient._PROMISE_THROTTLES[request.host] = new PromiseThrottle({
        requestsPerSecond: MoneroUtils.MAX_REQUESTS_PER_SECOND, // TODO: HttpClient should not depend on MoneroUtils for configuration
        promiseImplementation: Promise
      });
    }

    // request using fetch or xhr with timeout
    let timeout = request.timeout === undefined ? HttpClient._DEFAULT_TIMEOUT : request.timeout === 0 ? HttpClient._MAX_TIMEOUT : request.timeout;
    let requestPromise = HttpClient.requestAxios(request);
    return GenUtils.executeWithTimeout(requestPromise, timeout);
  }
  
  // ----------------------------- PRIVATE HELPERS ----------------------------
  
  static async requestAxios(req) {
    if (req.headers) throw new Error("Custom headers not implemented in XHR request");  // TODO

    // collect params from request which change on await
    const method = req.method;
    const uri = req.uri;
    const host = req.host;
    const username = req.username;
    const password = req.password;
    const body = req.body;
    const isBinary = body instanceof Uint8Array;
    
    // queue and throttle requests to execute in serial and rate limited per host
    const resp = await HttpClient._TASK_QUEUES[host].submit(async function() {
      return HttpClient._PROMISE_THROTTLES[host].add(function() {
        return new Promise(function(resolve, reject) {
          HttpClient.axiosDigestAuthRequest(method, uri, username, password, body).then(function(resp) {
            resolve(resp);
          }).catch(function(error) {
            if (error.response?.status) resolve(error.response);
            reject(new Error("Request failed without response: " + method + " " + uri));
          });
        });

      }.bind(this));
    });

    // normalize response
    let normalizedResponse = {};
    normalizedResponse.statusCode = resp.status;
    normalizedResponse.statusText = resp.statusText;
    normalizedResponse.headers = {...resp.headers};
    normalizedResponse.body = isBinary ? new Uint8Array(resp.data) : resp.data;
    if (normalizedResponse.body instanceof ArrayBuffer) normalizedResponse.body = new Uint8Array(normalizedResponse.body);  // handle empty binary request
    return normalizedResponse;
  }

  static axiosDigestAuthRequest = async function(method, url, username, password, body) {
    if (typeof CryptoJS === 'undefined' && typeof require === 'function') {
      var CryptoJS = require('crypto-js');
    }

    const generateCnonce = function() {
      const characters = 'abcdef0123456789';
      let token = '';
      for (let i = 0; i < 16; i++) {
        const randNum = Math.round(Math.random() * characters.length);
        token += characters.slice(randNum, randNum+1);
      }
      return token;
    }

    let count = 0;
    return Axios.request({
      url: url,
      method: method,
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: body instanceof Uint8Array ? 'arraybuffer' : undefined,
      httpAgent: url.startsWith("https") ? undefined : HttpClient._getHttpAgent(),
      httpsAgent: url.startsWith("https") ? HttpClient._getHttpsAgent() : undefined,
      data: body,
      transformResponse: res => res,
    }).catch(async (err) => {
      if (err.response?.status === 401) {
        let authHeader = err.response.headers['www-authenticate'].replace(/,\sDigest.*/, "");
        if (!authHeader) {
          throw err;
        }

        // Digest qop="auth",algorithm=MD5,realm="monero-rpc",nonce="hBZ2rZIxElv4lqCRrUylXA==",stale=false
        const authHeaderMap = authHeader.replace("Digest ", "").replaceAll('"', "").split(",").reduce((prev, curr) => ({...prev, [curr.split("=")[0]]: curr.split("=").slice(1).join('=')}), {})

        ++count;

        const cnonce = generateCnonce();
        const HA1 = CryptoJS.MD5(username+':'+authHeaderMap.realm+':'+password).toString();
        const HA2 = CryptoJS.MD5(method+':'+url).toString();

        const response = CryptoJS.MD5(HA1+':'+
          authHeaderMap.nonce+':'+
          ('00000000' + count).slice(-8)+':'+
          cnonce+':'+
          authHeaderMap.qop+':'+
          HA2).toString();
        const digestAuthHeader = 'Digest'+' '+
          'username="'+username+'", '+
          'realm="'+authHeaderMap.realm+'", '+
          'nonce="'+authHeaderMap.nonce+'", '+
          'uri="'+url+'", '+
          'response="'+response+'", '+
          'opaque="'+(authHeaderMap.opaque ?? null)+'", '+
          'qop='+authHeaderMap.qop+', '+
          'nc='+('00000000' + count).slice(-8)+', '+
          'cnonce="'+cnonce+'"';

        const finalResponse = await Axios.request({
          url: url,
          method: method,
          timeout: this.timeout,
          headers: {
            'Authorization': digestAuthHeader,
            'Content-Type': 'application/json'
          },
          responseType: body instanceof Uint8Array ? 'arraybuffer' : undefined,
          httpAgent: url.startsWith("https") ? undefined : HttpClient._getHttpAgent(),
          httpsAgent: url.startsWith("https") ? HttpClient._getHttpsAgent() : undefined,
          data: body,
          transformResponse: res => res,
        });

        return finalResponse;
      }
      throw err;
    }).catch(err => {
      throw err;
    });  
  }

  /**
   * Get a singleton instance of an HTTP client to share.
   * 
   * @return {http.Agent} a shared agent for network requests among library instances
   */
  static _getHttpAgent() {
    if (!HttpClient.HTTP_AGENT) {
      let http = require('http');
      HttpClient.HTTP_AGENT = new http.Agent({keepAlive: true});
    }
    return HttpClient.HTTP_AGENT;
  }
  
  /**
   * Get a singleton instance of an HTTPS client to share.
   * 
   * @return {https.Agent} a shared agent for network requests among library instances
   */
  static _getHttpsAgent() {
    if (!HttpClient.HTTPS_AGENT) {
      let https = require('https');
      HttpClient.HTTPS_AGENT = new https.Agent({keepAlive: true});
    }
    return HttpClient.HTTPS_AGENT;
  }
  
  
  static _parseXhrResponseHeaders(headersStr) {
    let headerMap = {};
    let headers = headersStr.trim().split(/[\r\n]+/);
    for (let header of headers) {
      let headerVals = header.split(": ");
      headerMap[headerVals[0]] = headerVals[1];
    }
    return headerMap;
  }
}

// default request config
HttpClient._DEFAULT_REQUEST = {
  method: "GET",
  resolveWithFullResponse: false,
  rejectUnauthorized: true
}

// rate limit requests per host
HttpClient._PROMISE_THROTTLES = [];
HttpClient._TASK_QUEUES = [];
HttpClient._DEFAULT_TIMEOUT = 30000;
HttpClient._MAX_TIMEOUT = 2147483647;

module.exports = HttpClient;