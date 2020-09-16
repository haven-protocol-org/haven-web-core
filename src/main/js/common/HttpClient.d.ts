export = HttpClient;
/**
 * Handle HTTP requests with a uniform interface.
 *
 * @hideconstructor
 */
declare class HttpClient {
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
     * @param {string} request.requestApi - one of "fetch" or "xhr" (default "fetch")
     * @param {boolean} request.resolveWithFullResponse - return full response if true, else body only (default false)
     * @param {boolean} request.rejectUnauthorized - whether or not to reject self-signed certificates (default true)
     * @returns {object} response - the response object
     * @returns {string|object|Uint8Array} response.body - the response body
     * @returns {number} response.statusCode - the response code
     * @returns {number} response.statusText - the response message
     * @returns {object} response.headers - the response headers
     */
    static request(request: {
        method: string;
        uri: string;
        body: string | object | any;
        username: string;
        password: string;
        headers: object;
        requestApi: string;
        resolveWithFullResponse: boolean;
        rejectUnauthorized: boolean;
    }): object;
    static _requestFetch(req: any): unknown;
    static _requestXhr(req: any): unknown;
    /**
     * Executes given tasks serially (first in, first out).
     *
     * @param {function} asyncFn is an asynchronous function to execute after previously given tasks
     */
    static _queueTask(asyncFn: {}): unknown;
    /**
     * Get a singleton instance of an HTTP client to share.
     *
     * @return {http.Agent} a shared agent for network requests among library instances
     */
    static _getHttpAgent(): any;
    /**
     * Get a singleton instance of an HTTPS client to share.
     *
     * @return {https.Agent} a shared agent for network requests among library instances
     */
    static _getHttpsAgent(): any;
    static _parseXhrResponseHeaders(headersStr: any): {};
}
declare namespace HttpClient {
    namespace DEFAULT_REQUEST {
        const method: string;
        const requestApi: string;
        const resolveWithFullResponse: boolean;
        const rejectUnauthorized: boolean;
    }
    function digestAuthRequest(method: any, url: any, username: any, password: any): void;
}
