export = MoneroHardForkInfo;
/**
 * Monero hard fork info.
 */
declare class MoneroHardForkInfo {
    constructor(state: any);
    state: any;
    toJson(): any;
    getEarliestHeight(): any;
    setEarliestHeight(earliestHeight: any): MoneroHardForkInfo;
    isEnabled(): any;
    setIsEnabled(isEnabled: any): MoneroHardForkInfo;
    getState(): any;
    setState(state: any): MoneroHardForkInfo;
    getThreshold(): any;
    setThreshold(threshold: any): MoneroHardForkInfo;
    getVersion(): any;
    setVersion(version: any): MoneroHardForkInfo;
    getNumVotes(): any;
    setNumVotes(numVotes: any): MoneroHardForkInfo;
    getWindow(): any;
    setWindow(window: any): MoneroHardForkInfo;
    getVoting(): any;
    setVoting(voting: any): MoneroHardForkInfo;
    getCredits(): any;
    setCredits(credits: any): MoneroHardForkInfo;
    getTopBlockHash(): any;
    setTopBlockHash(topBlockHash: any): MoneroHardForkInfo;
}
