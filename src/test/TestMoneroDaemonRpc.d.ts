export = TestMoneroDaemonRpc;
/**
 * Tests a Monero daemon.
 */
declare class TestMoneroDaemonRpc {
    constructor(testConfig: any);
    testConfig: any;
    /**
     * Run all tests.
     */
    runTests(): void;
}
