const BigInteger = require("../../common/biginteger");

/**
 * Haven circulating supply, holds pairs of asset and their circulating supply
 */
 class HavenCirculatingSupply {
  
    constructor(stateOrAmount, assetType) {
      
      this.state = {};
      // construct from json
      if (typeof stateOrAmount === "object") {
        
        // deserialize balances
        Object.entries(stateOrAmount).forEach( ([assetType, supply]) => this.setAssetSupply(assetType, supply));
      }
      
      // construct from individual params
      else {
        this.setAssetSupply(assetType, stateOrAmount);
      }
    }
    
    toJson() {
      let json = Object.assign({}, this.state);
      Object.entries(json).forEach( ([assetType, supply]) => json[assetType] = supply.toString());
      return json;
    }

    setAssetSupply(asset, supply) {

        // deserialize supply
        if (supply !== undefined && !(supply instanceof BigInteger)) supply = BigInteger.parse(supply);
        this.state[asset] = supply;
    }
    
    toDict() {
      return this.state;
    }

    toArray() {
        return Object.entries(this.state);
      }
    
    
    toString(indent = 0) {
      let str = "";
      Object.entries(this.state).forEach( ([assetType, amount]) => {

        str += GenUtils.kvLine("Asset", assetType, indent);
        str += GenUtils.kvLine("Supply", amount.toString(), indent);

      });

      return str;
    }
  }
  
  module.exports = HavenCirculatingSupply;