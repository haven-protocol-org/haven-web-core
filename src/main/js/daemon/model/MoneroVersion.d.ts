export = MoneroVersion;
/**
 * Models a Monero version.
 */
declare class MoneroVersion {
    /**
     * Construct the model.
     *
     * @param number is the version number
     * @param isRelease indicates if this version is a release
     */
    constructor(number: any, isRelease: any);
    state: {};
    getNumber(): any;
    setNumber(number: any): MoneroVersion;
    isRelease(): any;
    setIsRelease(isRelease: any): MoneroVersion;
    copy(): any;
    toJson(): {};
}
