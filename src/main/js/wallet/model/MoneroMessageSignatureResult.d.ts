export = MoneroMessageSignatureResult;
/**
 * Message signature verification result.
 *
 * @class
 */
declare class MoneroMessageSignatureResult {
    constructor(stateOrIsGood: any, isOld: any, signatureType: any, version: any);
    state: any;
    toJson(): any;
    isGood(): any;
    setIsGood(isGood: any): MoneroMessageSignatureResult;
    isOld(): any;
    setIsOld(isOld: any): MoneroMessageSignatureResult;
    getSignatureType(): any;
    setSignatureType(signatureType: any): MoneroMessageSignatureResult;
    getVersion(): any;
    setVersion(version: any): MoneroMessageSignatureResult;
}
