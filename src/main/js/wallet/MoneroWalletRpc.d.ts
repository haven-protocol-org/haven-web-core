export = MoneroWalletRpc;
declare const MoneroWalletRpc_base: typeof import("./MoneroWallet");
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
 * Implements a MoneroWallet as a client of monero-wallet-rpc.
 *
 * @implements {MoneroWallet}
 */
declare class MoneroWalletRpc extends MoneroWalletRpc_base {
    /**
     * Remove criteria which requires looking up other transfers/outputs to
     * fulfill query.
     *
     * @param {MoneroTxQuery} query - the query to decontextualize
     * @return {MoneroTxQuery} a reference to the query for convenience
     */
    static _decontextualize(query: import("./model/MoneroTxQuery")): import("./model/MoneroTxQuery");
    static _isContextual(query: any): boolean;
    static _convertRpcAccount(rpcAccount: any): import("./model/MoneroAccount");
    static _convertRpcSubaddress(rpcSubaddress: any): import("./model/MoneroSubaddress");
    /**
     * Initializes a sent transaction.
     *
     * @param {MoneroTxConfig} config - send config
     * @param {MoneroTxWallet} tx - existing transaction to initialize (optional)
     * @return {MoneroTxWallet} is the initialized send tx
     */
    static _initSentTxWallet(config: import("./model/MoneroTxConfig"), tx: import("./model/MoneroTxWallet")): import("./model/MoneroTxWallet");
    /**
     * Initializes a tx set from a RPC map excluding txs.
     *
     * @param rpcMap - map to initialize the tx set from
     * @return MoneroTxSet - initialized tx set
     * @return the resulting tx set
     */
    static _convertRpcTxSet(rpcMap: any): import("./model/MoneroTxSet");
    /**
     * Initializes a MoneroTxSet from from a list of rpc txs.
     *
     * @param rpcTxs - rpc txs to initialize the set from
     * @param txs - existing txs to further initialize (optional)
     * @return the converted tx set
     */
    static _convertRpcSentTxsToTxSet(rpcTxs: any, txs: any): import("./model/MoneroTxSet");
    /**
     * Converts a rpc tx with a transfer to a tx set with a tx and transfer.
     *
     * @param rpcTx - rpc tx to build from
     * @param tx - existing tx to continue initializing (optional)
     * @param isOutgoing - specifies if the tx is outgoing if true, incoming if false, or decodes from type if undefined
     * @returns the initialized tx set with a tx
     */
    static _convertRpcTxToTxSet(rpcTx: any, tx: any, isOutgoing: any): import("./model/MoneroTxSet");
    /**
     * Builds a MoneroTxWallet from a RPC tx.
     *
     * @param rpcTx - rpc tx to build from
     * @param tx - existing tx to continue initializing (optional)
     * @param isOutgoing - specifies if the tx is outgoing if true, incoming if false, or decodes from type if undefined
     * @returns {MoneroTxWallet} is the initialized tx
     */
    static _convertRpcTxWithTransfer(rpcTx: any, tx: any, isOutgoing: any): import("./model/MoneroTxWallet");
    static _convertRpcTxWalletWithOutput(rpcOutput: any): import("./model/MoneroTxWallet");
    static _convertRpcDescribeTransfer(rpcDescribeTransferResult: any): import("./model/MoneroTxSet");
    /**
     * Decodes a "type" from monero-wallet-rpc to initialize type and state
     * fields in the given transaction.
     *
     * TODO: these should be safe set
     *
     * @param rpcType is the type to decode
     * @param tx is the transaction to decode known fields to
     * @return {boolean} true if the rpc type indicates outgoing xor incoming
     */
    static _decodeRpcType(rpcType: any, tx: any): boolean;
    /**
     * Merges a transaction into a unique set of transactions.
     *
     * TODO monero core: skipIfAbsent only necessary because incoming payments not returned
     * when sent from/to same account #4500
     *
     * @param tx is the transaction to merge into the existing txs
     * @param txMap maps tx hashes to txs
     * @param blockMap maps block heights to blocks
     * @param skipIfAbsent specifies if the tx should not be added if it doesn't already exist
     */
    static _mergeTx(tx: any, txMap: any, blockMap: any, skipIfAbsent: any): void;
    /**
     * Compares two transactions by their height.
     */
    static _compareTxsByHeight(tx1: any, tx2: any): number;
    /**
     * Compares two transfers by ascending account and subaddress indices.
     */
    static _compareIncomingTransfers(t1: any, t2: any): number;
    /**
     * Compares two outputs by ascending account and subaddress indices.
     */
    static _compareOutputs(o1: any, o2: any): number;
    /**
     * <p>Construct a wallet RPC client.</p>
     *
     * <p>Examples:</p>
     *
     * <code>
     * let walletRpc = new MoneroWalletRpc("http://localhost:38081", "superuser", "abctesting123");<br><br>
     *
     * let walletRpc = new MoneroWalletRpc({<br>
     * &nbsp;&nbsp; uri: "http://localhost:38081",<br>
     * &nbsp;&nbsp; username: "superuser",<br>
     * &nbsp;&nbsp; password: "abctesting123",<br>
     * &nbsp;&nbsp; rejectUnauthorized: false // e.g. local development<br>
     * });
     * </code>
     *
     * @param {string|object|MoneroRpcConnection} uriOrConfigOrConnection - uri of monero-wallet-rpc or JS config object or MoneroRpcConnection
     * @param {string} uriOrConfigOrConnection.uri - uri of monero-wallet-rpc
     * @param {string} uriOrConfigOrConnection.username - username to authenticate with monero-wallet-rpc (optional)
     * @param {string} uriOrConfigOrConnection.password - password to authenticate with monero-wallet-rpc (optional)
     * @param {boolean} uriOrConfigOrConnection.rejectUnauthorized - rejects self-signed certificates if true (default true)
     * @param {string} username - username to authenticate with monero-wallet-rpc (optional)
     * @param {string} password - password to authenticate with monero-wallet-rpc (optional)
     * @param {boolean} rejectUnauthorized - rejects self-signed certificates if true (default true)
     */
    constructor(uriOrConfigOrConnection: string | object | import("../common/MoneroRpcConnection"), username: string, password: string, rejectUnauthorized: boolean);
    config: any;
    rpc: import("../common/MoneroRpcConnection");
    addressCache: {};
    /**
     * Get the wallet's RPC connection.
     *
     * @return {MoneroWalletRpc} the wallet's rpc connection
     */
    getRpcConnection(): MoneroWalletRpc;
    /**
     * <p>Open an existing wallet on the monero-wallet-rpc server.</p>
     *
     * <p>Example:<p>
     *
     * <code>
     * let wallet = new MoneroWalletRpc("http://localhost:38083", "rpc_user", "abc123");<br>
     * await wallet.openWallet("mywallet1", "supersecretpassword");<br>
     * await wallet.openWallet({<br>
     * &nbsp;&nbsp; path: "mywallet2",<br>
     * &nbsp;&nbsp; password: "supersecretpassword",<br>
     * &nbsp;&nbsp; serverUri: "http://locahost:38081",<br>
     * &nbsp;&nbsp; rejectUnauthorized: false<br>
     * });<br>
     * </code>
     *
     * @param {string|object|MoneroWalletConfig} pathOrConfig  - the wallet's name or configuration to open
     * @param {string} pathOrConfig.path - path of the wallet to create (optional, in-memory wallet if not given)
     * @param {string} pathOrConfig.password - password of the wallet to create
     * @param {string} pathOrConfig.serverUri - uri of a daemon to use (optional, monero-wallet-rpc usually started with daemon config)
     * @param {string} pathOrConfig.serverUsername - username to authenticate with the daemon (optional)
     * @param {string} pathOrConfig.serverPassword - password to authenticate with the daemon (optional)
     * @param {boolean} pathOrConfig.rejectUnauthorized - reject self-signed server certificates if true (defaults to true)
     * @param {MoneroRpcConnection|object} pathOrConfig.server - MoneroRpcConnection or equivalent JS object providing daemon configuration (optional)
     * @param {string} password is the wallet's password
     */
    openWallet(pathOrConfig: string | object | import("./model/MoneroWalletConfig"), password: string): unknown;
    path: any;
    /**
     * <p>Create and open a wallet on the monero-wallet-rpc server.<p>
     *
     * <p>Example:<p>
     *
     * <code>
     * &sol;&sol; construct client to monero-wallet-rpc<br>
     * let walletRpc = new MoneroWalletRpc("http://localhost:38083", "rpc_user", "abc123");<br><br>
     *
     * &sol;&sol; create and open wallet on monero-wallet-rpc<br>
     * await walletRpc.createWallet({<br>
     * &nbsp;&nbsp; path: "mywallet",<br>
     * &nbsp;&nbsp; password: "abc123",<br>
     * &nbsp;&nbsp; mnemonic: "coexist igloo pamphlet lagoon...",<br>
     * &nbsp;&nbsp; restoreHeight: 1543218l<br>
     * });
     *  </code>
     *
     * @param {object|MoneroWalletConfig} config - MoneroWalletConfig or equivalent JS object
     * @param {string} config.path - path of the wallet to create (optional, in-memory wallet if not given)
     * @param {string} config.password - password of the wallet to create
     * @param {string} config.mnemonic - mnemonic of the wallet to create (optional, random wallet created if neither mnemonic nor keys given)
     * @param {string} config.seedOffset - the offset used to derive a new seed from the given mnemonic to recover a secret wallet from the mnemonic phrase
     * @param {string} config.primaryAddress - primary address of the wallet to create (only provide if restoring from keys)
     * @param {string} config.privateViewKey - private view key of the wallet to create (optional)
     * @param {string} config.privateSpendKey - private spend key of the wallet to create (optional)
     * @param {number} config.restoreHeight - block height to start scanning from (defaults to 0 unless generating random wallet)
     * @param {string} config.language - language of the wallet's mnemonic phrase (defaults to "English" or auto-detected)
     * @param {string} config.serverUri - uri of a daemon to use (optional, monero-wallet-rpc usually started with daemon config)
     * @param {string} config.serverUsername - username to authenticate with the daemon (optional)
     * @param {string} config.serverPassword - password to authenticate with the daemon (optional)
     * @param {boolean} config.rejectUnauthorized - reject self-signed server certificates if true (defaults to true)
     * @param {MoneroRpcConnection|object} config.server - MoneroRpcConnection or equivalent JS object providing daemon configuration (optional)
     * @param {boolean} config.saveCurrent - specifies if the current RPC wallet should be saved before being closed (default true)
     */
    createWallet(config: object | import("./model/MoneroWalletConfig")): unknown;
    /**
     * Create and open a new wallet with a randomly generated seed on the RPC server.
     *
     * @param {string} name - name of the wallet file to create
     * @param {string} password - wallet's password
     * @param {string} language - language for the wallet's mnemonic phrase
     */
    _createWalletRandom(name: string, password: string, language: string): any;
    /**
     * Create and open a wallet from an existing mnemonic phrase on the RPC server,
     * closing the currently open wallet if applicable.
     *
     * @param {string} name - name of the wallet to create on the RPC server
     * @param {string} password - wallet's password
     * @param {string} mnemonic - mnemonic of the wallet to construct
     * @param {int} restoreHeight - block height to restore from (default = 0)
     * @param {string} language - language of the mnemonic in case the old language is invalid
     * @param {string} seedOffset - offset used to derive a new seed from the given mnemonic to recover a secret wallet from the mnemonic phrase
     * @param {boolean} saveCurrent - specifies if the current RPC wallet should be saved before being closed
     */
    _createWalletFromMnemonic(name: string, password: string, mnemonic: string, restoreHeight: any, language: string, seedOffset: string, saveCurrent: boolean): any;
    /**
     * Create a wallet on the RPC server from an address, view key, and (optionally) spend key.
     *
     * @param name - name of the wallet to create on the RPC server
     * @param password - password encrypt the wallet
     * @param networkType - wallet's network type
     * @param address - address of the wallet to construct
     * @param viewKey - view key of the wallet to construct
     * @param spendKey - spend key of the wallet to construct or null to create a view-only wallet
     * @param restoreHeight - block height to restore (i.e. scan the chain) from (default = 0)
     * @param language - wallet and mnemonic's language (default = "English")
     */
    _createWalletFromKeys(name: any, password: any, address: any, viewKey: any, spendKey: any, restoreHeight: any, language: any, saveCurrent: any): any;
    /**
     * Get a list of available languages for the wallet's mnemonic phrase.
     *
     * @return {string[]} the available languages for the wallet's mnemonic phrase
     */
    getMnemonicLanguages(): string[];
    /**
     * Save and close the current wallet and stop the RPC server.
     */
    stop(): any;
    _clear(): any;
    _getBalances(accountIdx: any, subaddressIdx: any): unknown;
    _getAccountIndices(getSubaddressIndices: any): unknown;
    _getSubaddressIndices(accountIdx: any): unknown;
    _getTransfersAux(query: any): unknown;
    _getOutputsAux(query: any): unknown;
    /**
     * Common method to get key images.
     *
     * @param all - pecifies to get all xor only new images from last import
     * @return {MoneroKeyImage[]} are the key images
     */
    _rpcExportKeyImages(all: any): import("../daemon/model/MoneroKeyImage")[];
    _rpcSweepAccount(config: any): unknown;
}
