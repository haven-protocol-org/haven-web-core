export = MoneroMiningStatus;
/**
 * Models daemon mining status.
 */
declare class MoneroMiningStatus {
    constructor(state: any);
    state: any;
    toJson(): any;
    isActive(): any;
    setIsActive(isActive: any): MoneroMiningStatus;
    getAddress(): any;
    setAddress(address: any): MoneroMiningStatus;
    getSpeed(): any;
    setSpeed(speed: any): MoneroMiningStatus;
    getNumThreads(): any;
    setNumThreads(numThreads: any): MoneroMiningStatus;
    isBackground(): any;
    setIsBackground(isBackground: any): MoneroMiningStatus;
}
