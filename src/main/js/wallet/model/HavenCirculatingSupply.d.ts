export = HavenCirculatingSupply;
/**
 * Haven circulating supply, holds pairs of asset and their circulating supply
 */
declare class HavenCirculatingSupply {
    constructor(stateOrAmount: any, assetType: any);
    state: {};
    toJson(): any;
    setAssetSupply(asset: any, supply: any): void;
    toDict(): {};
    toArray(): any;
    toString(indent?: number): string;
}
