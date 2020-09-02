export = TestMoneroWalletWasm;
declare const TestMoneroWalletWasm_base: typeof import("./TestMoneroWalletCommon");
/**
 * Tests a Monero wallet using WebAssembly to bridge to monero-project's wallet2.
 */
declare class TestMoneroWalletWasm extends TestMoneroWalletWasm_base {
    static _getRandomWalletPath(): string;
    static _testWalletEqualityOnChain(wallet1: any, wallet2: any): Promise<void>;
    constructor(testConfig: any);
    getWalletGt(): Promise<any>;
    runTests(): void;
    _testWalletWasm(): void;
}
