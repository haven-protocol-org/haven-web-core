export = MoneroBan;
/**
 * Monero banhammer.
 */
declare class MoneroBan {
    constructor(state: any);
    state: any;
    toJson(): any;
    getHost(): any;
    setHost(host: any): MoneroBan;
    getIp(): any;
    setIp(ip: any): MoneroBan;
    isBanned(): any;
    setIsBanned(isBanned: any): MoneroBan;
    getSeconds(): any;
    setSeconds(seconds: any): MoneroBan;
}
