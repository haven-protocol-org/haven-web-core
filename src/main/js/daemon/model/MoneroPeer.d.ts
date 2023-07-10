export = MoneroPeer;
/**
 * Models a peer to the daemon.
 */
declare class MoneroPeer {
    constructor(state: any);
    state: any;
    toJson(): any;
    getId(): any;
    getId(): any;
    setId(id: any): MoneroPeer;
    setId(id: any): MoneroPeer;
    getAddress(): any;
    setAddress(address: any): MoneroPeer;
    getHost(): any;
    setHost(host: any): MoneroPeer;
    getPort(): any;
    setPort(port: any): MoneroPeer;
    /**
     * Indicates if the peer was online when last checked (aka "white listed" as
     * opposed to "gray listed").
     *
     * @return {boolean} true if peer was online when last checked, false otherwise
     */
    isOnline(): boolean;
    setIsOnline(isOnline: any): MoneroPeer;
    getLastSeenTimestamp(): any;
    setLastSeenTimestamp(lastSeenTimestamp: any): MoneroPeer;
    getPruningSeed(): any;
    setPruningSeed(pruningSeed: any): MoneroPeer;
    getRpcPort(): any;
    setRpcPort(rpcPort: any): MoneroPeer;
    getRpcCreditsPerHash(): any;
    setRpcCreditsPerHash(rpcCreditsPerHash: any): MoneroPeer;
    getAvgDownload(): any;
    setAvgDownload(avgDownload: any): MoneroPeer;
    getAvgUpload(): any;
    setAvgUpload(avgUpload: any): MoneroPeer;
    getCurrentDownload(): any;
    setCurrentDownload(currentDownload: any): MoneroPeer;
    getCurrentUpload(): any;
    setCurrentUpload(currentUpload: any): MoneroPeer;
    getHeight(): any;
    setHeight(height: any): MoneroPeer;
    isIncoming(): any;
    setIsIncoming(isIncoming: any): MoneroPeer;
    getLiveTime(): any;
    setLiveTime(liveTime: any): MoneroPeer;
    isLocalIp(): any;
    setIsLocalIp(isLocalIp: any): MoneroPeer;
    isLocalHost(): any;
    setIsLocalHost(isLocalHost: any): MoneroPeer;
    getNumReceives(): any;
    setNumReceives(numReceives: any): MoneroPeer;
    getNumSends(): any;
    setNumSends(numSends: any): MoneroPeer;
    getReceiveIdleTime(): any;
    setReceiveIdleTime(receiveIdleTime: any): MoneroPeer;
    getSendIdleTime(): any;
    setSendIdleTime(sendIdleTime: any): MoneroPeer;
    getState(): any;
    setState(state: any): MoneroPeer;
    getNumSupportFlags(): any;
    setNumSupportFlags(numSupportFlags: any): MoneroPeer;
    getType(): any;
    setType(type: any): MoneroPeer;
}
