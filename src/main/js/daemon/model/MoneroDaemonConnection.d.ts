export = MoneroDaemonConnection;
/**
 * Monero daemon connection.
 */
declare class MoneroDaemonConnection {
    constructor(state: any);
    state: any;
    toJson(): any;
    getPeer(): any;
    setPeer(peer: any): MoneroDaemonConnection;
    getId(): any;
    setId(id: any): MoneroDaemonConnection;
    getAvgDownload(): any;
    setAvgDownload(avgDownload: any): MoneroDaemonConnection;
    getAvgUpload(): any;
    setAvgUpload(avgUpload: any): MoneroDaemonConnection;
    getCurrentDownload(): any;
    setCurrentDownload(currentDownload: any): MoneroDaemonConnection;
    getCurrentUpload(): any;
    setCurrentUpload(currentUpload: any): MoneroDaemonConnection;
    getHeight(): any;
    setHeight(height: any): MoneroDaemonConnection;
    isIncoming(): any;
    setIsIncoming(isIncoming: any): MoneroDaemonConnection;
    getLiveTime(): any;
    setLiveTime(liveTime: any): MoneroDaemonConnection;
    isLocalIp(): any;
    setIsLocalIp(isLocalIp: any): MoneroDaemonConnection;
    isLocalHost(): any;
    setIsLocalHost(isLocalHost: any): MoneroDaemonConnection;
    getNumReceives(): any;
    setNumReceives(numReceives: any): MoneroDaemonConnection;
    getNumSends(): any;
    setNumSends(numSends: any): MoneroDaemonConnection;
    getReceiveIdleTime(): any;
    setReceiveIdleTime(receiveIdleTime: any): MoneroDaemonConnection;
    getSendIdleTime(): any;
    setSendIdleTime(sendIdleTime: any): MoneroDaemonConnection;
    getState(): any;
    setState(state: any): MoneroDaemonConnection;
    getNumSupportFlags(): any;
    setNumSupportFlags(numSupportFlags: any): MoneroDaemonConnection;
    getType(): any;
    setType(type: any): MoneroDaemonConnection;
}
