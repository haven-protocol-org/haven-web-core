export = HavenBalance;
/**
 * Haven balance model, holds pairs of asset and amount/balance
 */
declare class HavenBalance {
    constructor(stateOrAmount: any, assetType: any);
    state: {};
    toJson(): any;
    setAssetBalance(asset: any, amount: any): void;
    toDict(): {};
    toArray(): any;
    toString(indent?: number): string;
}
