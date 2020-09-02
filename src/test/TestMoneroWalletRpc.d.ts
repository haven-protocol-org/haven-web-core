export = TestMoneroWalletRpc;
declare const TestMoneroWalletRpc_base: typeof import("./TestMoneroWalletCommon");
/**
 * Tests the Monero Wallet RPC client and server.
 */
declare class TestMoneroWalletRpc extends TestMoneroWalletRpc_base {
    constructor(testConfig: any);
    runTests(): void;
    _testWalletRpc(config: any): void;
}
