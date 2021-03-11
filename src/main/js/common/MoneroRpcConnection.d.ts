export = MoneroRpcConnection;
/**
 * Maintains a connection and sends requests to a Monero RPC API.
 */
declare class MoneroRpcConnection {
    /**
     * <p>Construct a RPC connection.</p>
     *
     * <p>Examples:</p>
     *
     * <code>
     * let connection1 = new MoneroRpcConnection("http://localhost:38081", "daemon_user", "daemon_password_123")<br><br>
     *
     * let connection2 = new MoneroRpcConnection({<br>
     * &nbsp;&nbsp; uri: http://localhost:38081,<br>
     * &nbsp;&nbsp; username: "daemon_user",<br>
     * &nbsp;&nbsp; password: "daemon_password_123",<br>
     * &nbsp;&nbsp; rejectUnauthorized: false // accept self-signed certificates e.g. for local development<br>
     * });
     * </code>
     *
     * @param {string|object|MoneroRpcConnection} uriOrConfigOrConnection - RPC endpoint URI, MoneroRpcConnection, or equivalent JS object
     * @param {string} uriOrConfigOrConnection.uri - URI of the RPC endpoint
     * @param {string} uriOrConfigOrConnection.username - username to authenticate with the RPC endpoint (optional)
     * @param {string} uriOrConfigOrConnection.password - password to authenticate with the RPC endpoint (optional)
     * @param {boolean} uriOrConfigOrConnection.rejectUnauthorized - rejects self-signed certificates if true (default true)
     * @param {string} username - username to authenticate with the RPC endpoint (optional)
     * @param {string} password - password to authenticate with the RPC endpoint (optional)
     * @param {boolean} rejectUnauthorized - reject self-signed certificates if true (default true)
     */
    constructor(uriOrConfigOrConnection: string | object | MoneroRpcConnection, username: string, password: string, rejectUnauthorized: boolean);
    config: any;
    getUri(): any;
    getUsername(): any;
    getPassword(): any;
    getRejectUnauthorized(): any;
    getConfig(): any;
    /**
     * Sends a JSON RPC request.
     *
     * @param method is the JSON RPC method to invoke
     * @param params are request parameters
     * @return {object} is the response map
     */
    sendJsonRequest(method: any, params: any): object;
    /**
     * Sends a RPC request to the given path and with the given paramters.
     *
     * E.g. "/get_transactions" with params
     */
    sendPathRequest(path: any, params: any): Promise<any>;
    /**
     * Sends a binary RPC request.
     *
     * @param path is the path of the binary RPC method to invoke
     * @paramm params are the request parameters
     * @return a Uint8Array with the binary response
     */
    sendBinaryRequest(path: any, params: any): Promise<any>;
}
declare namespace MoneroRpcConnection {
    namespace DEFAULT_CONFIG {
        const uri: any;
        const username: any;
        const password: any;
        const rejectUnauthorized: boolean;
    }
    const SUPPORTED_FIELDS: string[];
}
