export = MoneroDaemonInfo;
/**
 * Monero daemon info.
 */
declare class MoneroDaemonInfo {
    constructor(state: any);
    state: any;
    toJson(): any;
    getVersion(): any;
    setVersion(version: any): MoneroDaemonInfo;
    getNumAltBlocks(): any;
    setNumAltBlocks(numAltBlocks: any): MoneroDaemonInfo;
    getBlockSizeLimit(): any;
    setBlockSizeLimit(blockSizeLimit: any): MoneroDaemonInfo;
    getBlockSizeMedian(): any;
    setBlockSizeMedian(blockSizeMedian: any): MoneroDaemonInfo;
    getBlockWeightLimit(): any;
    setBlockWeightLimit(blockWeightLimit: any): MoneroDaemonInfo;
    getBlockWeightMedian(): any;
    setBlockWeightMedian(blockWeightMedian: any): MoneroDaemonInfo;
    getBootstrapDaemonAddress(): any;
    setBootstrapDaemonAddress(bootstrapDaemonAddress: any): MoneroDaemonInfo;
    getDifficulty(): any;
    setDifficulty(difficulty: any): MoneroDaemonInfo;
    getCumulativeDifficulty(): any;
    setCumulativeDifficulty(cumulativeDifficulty: any): MoneroDaemonInfo;
    getFreeSpace(): any;
    setFreeSpace(freeSpace: any): MoneroDaemonInfo;
    getNumOfflinePeers(): any;
    setNumOfflinePeers(numOfflinePeers: any): MoneroDaemonInfo;
    getNumOnlinePeers(): any;
    setNumOnlinePeers(numOnlinePeers: any): MoneroDaemonInfo;
    getHeight(): any;
    setHeight(height: any): MoneroDaemonInfo;
    getHeightWithoutBootstrap(): any;
    setHeightWithoutBootstrap(heightWithoutBootstrap: any): MoneroDaemonInfo;
    getNetworkType(): any;
    setNetworkType(networkType: any): MoneroDaemonInfo;
    isOffline(): any;
    setIsOffline(isOffline: any): MoneroDaemonInfo;
    getNumIncomingConnections(): any;
    setNumIncomingConnections(numIncomingConnections: any): MoneroDaemonInfo;
    getNumOutgoingConnections(): any;
    setNumOutgoingConnections(numOutgoingConnections: any): MoneroDaemonInfo;
    getNumRpcConnections(): any;
    setNumRpcConnections(numRpcConnections: any): MoneroDaemonInfo;
    getStartTimestamp(): any;
    setStartTimestamp(startTimestamp: any): MoneroDaemonInfo;
    getTarget(): any;
    setTarget(target: any): MoneroDaemonInfo;
    getTargetHeight(): any;
    setTargetHeight(targetHeight: any): MoneroDaemonInfo;
    getTopBlockHash(): any;
    setTopBlockHash(topBlockHash: any): MoneroDaemonInfo;
    getNumTxs(): any;
    setNumTxs(numTxs: any): MoneroDaemonInfo;
    getNumTxsPool(): any;
    setNumTxsPool(numTxsPool: any): MoneroDaemonInfo;
    getWasBootstrapEverUsed(): any;
    setWasBootstrapEverUsed(wasBootstrapEverUsed: any): MoneroDaemonInfo;
    getDatabaseSize(): any;
    setDatabaseSize(databaseSize: any): MoneroDaemonInfo;
    getUpdateAvailable(): any;
    setUpdateAvailable(updateAvailable: any): MoneroDaemonInfo;
    getCredits(): any;
    setCredits(credits: any): MoneroDaemonInfo;
}
