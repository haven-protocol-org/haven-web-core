export = MoneroDaemonSyncInfo;
/**
 * Models daemon synchronization information.
 */
declare class MoneroDaemonSyncInfo {
    constructor(state: any);
    state: any;
    toJson(): any;
    getHeight(): any;
    setHeight(height: any): MoneroDaemonSyncInfo;
    getConnections(): any;
    setConnections(connections: any): MoneroDaemonSyncInfo;
    getSpans(): any;
    setSpans(spans: any): MoneroDaemonSyncInfo;
    getTargetHeight(): any;
    setTargetHeight(targetHeight: any): MoneroDaemonSyncInfo;
    getNextNeededPruningSeed(): any;
    setNextNeededPruningSeed(nextNeededPruningSeed: any): MoneroDaemonSyncInfo;
    getOverview(): any;
    setOverview(overview: any): MoneroDaemonSyncInfo;
    getCredits(): any;
    setCredits(credits: any): MoneroDaemonSyncInfo;
    getTopBlockHash(): any;
    setTopBlockHash(topBlockHash: any): MoneroDaemonSyncInfo;
}
