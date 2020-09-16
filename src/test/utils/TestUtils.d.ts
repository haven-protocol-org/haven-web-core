export = TestUtils;
/**
 * Collection of test utilities and configurations.
 *
 * TODO: move hard coded to config
 */
declare class TestUtils {
    /**
     * Get a singleton daemon RPC instance shared among tests.
     *
     * @return {MoneroDaemonRpc} a daemon RPC instance
     */
    static getDaemonRpc(): any;
    static getDaemonRpcConnection(): import("../../main/js/common/MoneroRpcConnection");
    /**
     * Get a singleton wallet RPC instance shared among tests.
     *
     * @return {MoneroWalletRpc} a wallet RPC instance
     */
    static getWalletRpc(): any;
    /**
     * Get a singleton wallet WASM instance shared among tests.
     *
     * @return {MoneroWalletWasm} a wasm wallet instance
     */
    static getWalletWasm(): any;
    /**
     * Get a singleton keys-only wallet instance shared among tests.
     *
     * @return {MoneroWalletKeys} a keys-only wallet instance
     */
    static getWalletKeys(): any;
    static testUnsignedBigInteger(num: any, nonZero: any): void;
    static getExternalWalletAddress(): unknown;
    static txsMergeable(tx1: any, tx2: any): boolean;
}
declare namespace TestUtils {
    const WALLET_NAME: string;
    const WALLET_PASSWORD: string;
    const TEST_WALLETS_DIR: string;
    const WALLET_WASM_PATH: string;
    const MAX_FEE: any;
    const NETWORK_TYPE: number;
    const MNEMONIC: string;
    const ADDRESS: string;
    const FIRST_RECEIVE_HEIGHT: number;
    namespace WALLET_RPC_CONFIG {
        const uri: string;
        const username: string;
        const password: string;
        const rejectUnauthorized: boolean;
    }
    namespace DAEMON_RPC_CONFIG {
        const uri_1: string;
        export { uri_1 as uri };
        const username_1: string;
        export { username_1 as username };
        const password_1: string;
        export { password_1 as password };
    }
    const TX_POOL_WALLET_TRACKER: import("./TxPoolWalletTracker");
    const PROXY_TO_WORKER: any;
}
