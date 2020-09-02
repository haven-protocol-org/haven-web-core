export = MoneroDaemonPeer;
/**
 * Models a peer to the daemon.
 */
declare class MoneroDaemonPeer {
    constructor(state: any);
    state: any;
    toJson(): any;
    getId(): any;
    setId(id: any): MoneroDaemonPeer;
    getAddress(): any;
    setAddress(address: any): MoneroDaemonPeer;
    getHost(): any;
    setHost(host: any): MoneroDaemonPeer;
    getPort(): any;
    setPort(port: any): MoneroDaemonPeer;
    /**
     * Indicates if the peer was online when last checked (aka "white listed" as
     * opposed to "gray listed").
     *
     * @return {boolean} true if peer was online when last checked, false otherwise
     */
    isOnline(): boolean;
    setIsOnline(isOnline: any): MoneroDaemonPeer;
    getLastSeenTimestamp(): any;
    setLastSeenTimestamp(lastSeenTimestamp: any): MoneroDaemonPeer;
    getPruningSeed(): any;
    setPruningSeed(pruningSeed: any): MoneroDaemonPeer;
    getRpcPort(): any;
    setRpcPort(rpcPort: any): MoneroDaemonPeer;
    getRpcCreditsPerHash(): any;
    setRpcCreditsPerHash(rpcCreditsPerHash: any): MoneroDaemonPeer;
}
