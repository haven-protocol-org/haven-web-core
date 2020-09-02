export = TestMoneroWalletKeys;
declare const TestMoneroWalletKeys_base: typeof import("./TestMoneroWalletCommon");
/**
 * Tests the implementation of MoneroWallet which only manages keys using WebAssembly.
 */
declare class TestMoneroWalletKeys extends TestMoneroWalletKeys_base {
    constructor(config: any);
    runTests(): void;
    _testWalletKeys(): void;
}
