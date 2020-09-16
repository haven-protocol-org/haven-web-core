export = MoneroDaemonRpc;
declare const MoneroDaemonRpc_base: typeof import("./MoneroDaemon");
/**
 * Copyright (c) woodser
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * Implements a MoneroDaemon as a client of monero-daemon-rpc.
 *
 * @implements {MoneroDaemon}
 */
declare class MoneroDaemonRpc extends MoneroDaemonRpc_base {
    static _normalizeConfig(uriOrConfigOrConnection: any, username: any, password: any, rejectUnauthorized: any, pollInterval: any, proxyToWorker: any): any;
    static _checkResponseStatus(resp: any): void;
    static _convertRpcBlockHeader(rpcHeader: any): import("./model/MoneroBlockHeader");
    static _convertRpcBlock(rpcBlock: any): import("./model/MoneroBlock");
    /**
     * Transfers RPC tx fields to a given MoneroTx without overwriting previous values.
     *
     * TODO: switch from safe set
     *
     * @param rpcTx - RPC map containing transaction fields
     * @param tx  - MoneroTx to populate with values (optional)
     * @returns tx - same tx that was passed in or a new one if none given
     */
    static _convertRpcTx(rpcTx: any, tx: any): any;
    static _convertRpcOutput(rpcOutput: any, tx: any): import("./model/MoneroOutput");
    static _convertRpcBlockTemplate(rpcTemplate: any): import("./model/MoneroBlockTemplate");
    static _convertRpcInfo(rpcInfo: any): import("./model/MoneroDaemonInfo");
    /**
     * Initializes sync info from RPC sync info.
     *
     * @param rpcSyncInfo - rpc map to initialize the sync info from
     * @return {MoneroDaemonSyncInfo} is sync info initialized from the map
     */
    static _convertRpcSyncInfo(rpcSyncInfo: any): import("./model/MoneroDaemonSyncInfo");
    static _convertRpcHardForkInfo(rpcHardForkInfo: any): import("./model/MoneroHardForkInfo");
    static _convertRpcConnectionSpan(rpcConnectionSpan: any): any;
    static _convertRpcOutputHistogramEntry(rpcEntry: any): import("./model/MoneroOutputHistogramEntry");
    static _convertRpcSubmitTxResult(rpcResult: any): import("./model/MoneroSubmitTxResult");
    static _convertRpcTxPoolStats(rpcStats: any): any;
    static _convertRpcAltChain(rpcChain: any): import("./model/MoneroAltChain");
    static _convertRpcPeer(rpcPeer: any): import("./model/MoneroDaemonPeer");
    static _convertRpcConnection(rpcConnection: any): import("./model/MoneroDaemonConnection");
    static _convertToRpcBan(ban: any): {
        host: any;
        ip: any;
        ban: any;
        seconds: any;
    };
    static _convertRpcMiningStatus(rpcStatus: any): import("./model/MoneroMiningStatus");
    static _convertRpcUpdateCheckResult(rpcResult: any): any;
    static _convertRpcUpdateDownloadResult(rpcResult: any): any;
    /**
     * Converts a '0x' prefixed hexidecimal string to a BigInteger.
     *
     * @param hex is the '0x' prefixed hexidecimal string to convert
     * @return BigInteger is the hexicedimal converted to decimal
     */
    static _prefixedHexToBI(hex: any): import("../common/biginteger");
    /**
     * <p>Construct a daemon RPC client.<p>
     *
     * <p>Examples:<p>
     *
     * <code>
     * let daemon = new MoneroDaemonRpc("http://localhost:38081", "superuser", "abctesting123");<br><br>
     *
     * let daemon = new MoneroDaemonRpc({<br>
     * &nbsp;&nbsp; uri: "http://localhost:38081",<br>
     * &nbsp;&nbsp; username: "superuser",<br>
     * &nbsp;&nbsp; password: "abctesting123"<br>
     * });
     * </code>
     *
     * @param {string|object|MoneroRpcConnection} uriOrConfigOrConnection - uri of monero-daemon-rpc or JS config object or MoneroRpcConnection
     * @param {string} uriOrConfigOrConnection.uri - uri of monero-daemon-rpc
     * @param {string} uriOrConfigOrConnection.username - username to authenticate with monero-daemon-rpc (optional)
     * @param {string} uriOrConfigOrConnection.password - password to authenticate with monero-daemon-rpc (optional)
     * @param {boolean} uriOrConfigOrConnection.rejectUnauthorized - rejects self-signed certificates if true (default true)
     * @param {number} uriOrConfigOrConnection.pollInterval - poll interval to query for updates in ms (default 5000)
     * @param {boolean} uriOrConfigOrConnection.proxyToWorker - run the daemon client in a web worker if true (default true if browser, false otherwise)
     * @param {string} username - username to authenticate with monero-daemon-rpc (optional)
     * @param {string} password - password to authenticate with monero-daemon-rpc (optional)
     * @param {boolean} rejectUnauthorized - rejects self-signed certificates if true (default true)
     * @param {number} pollInterval - poll interval to query for updates in ms (default 5000)
     * @param {boolean} proxyToWorker - runs the daemon client in a web worker if true (default true if browser, false otherwise)
     */
    constructor(uriOrConfigOrConnection: string | object | import("../common/MoneroRpcConnection"), username: string, password: string, rejectUnauthorized: boolean, pollInterval: number, proxyToWorker: boolean);
    config: any;
    _proxyPromise: unknown;
    rpc: import("../common/MoneroRpcConnection");
    listeners: {};
    cachedHeaders: {};
    /**
     * Get the daemon's RPC connection.
     *
     * @return {MoneroRpcConnection} the daemon's rpc connection
     */
    getRpcConnection(): import("../common/MoneroRpcConnection");
    _getDaemonProxy(): unknown;
    _startPollingHeaders(interval: any): any;
    isPollingHeaders: boolean;
    _stopPollingHeaders(): void;
    _getBandwidthLimits(): unknown;
    _setBandwidthLimits(downLimit: any, upLimit: any): unknown;
    /**
     * Get a contiguous chunk of blocks starting from a given height up to a maximum
     * height or amount of block data fetched from the blockchain, whichever comes first.
     *
     * @param {number} startHeight - start height to retrieve blocks (default 0)
     * @param {number} maxHeight - maximum end height to retrieve blocks (default blockchain height)
     * @param {number} maxReqSize - maximum amount of block data to fetch from the blockchain in bytes (default 3,000,000 bytes)
     * @return {MoneroBlock[]} are the resulting chunk of blocks
     */
    _getMaxBlocks(startHeight: number, maxHeight: number, maxReqSize: number): import("./model/MoneroBlock")[];
    /**
     * Retrieves a header by height from the cache or fetches and caches a header
     * range if not already in the cache.
     *
     * @param {number} height - height of the header to retrieve from the cache
     * @param {number} maxHeight - maximum height of headers to cache
     */
    _getBlockHeaderByHeightCached(height: number, maxHeight: number): unknown;
}
declare namespace MoneroDaemonRpc {
    const DEFAULT_ID: string;
    const MAX_REQ_SIZE: string;
    const NUM_HEADERS_PER_REQ: string;
}
