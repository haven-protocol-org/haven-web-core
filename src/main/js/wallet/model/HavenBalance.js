

/**
 * Haven balance model, holds pairs of asset and amount/balance
 */
 class HavenBalance {
  
    constructor(stateOrAmount, assetType) {
      
      this.state = {};
      // construct from json
      if (typeof stateOrAmount === "object") {
        
        // deserialize balances
        Object.entries(stateOrAsset).forEach( ([assetType, amount]) => this.setAssetBalance(assetType, amount));
      }
      
      // construct from individual params
      else {
        this.setAssetBalance(assetType, stateOrAmount);
      }
    }
    
    toJson() {
      let json = Object.assign({}, this.state);
      Object.entries(json).forEach( ([assetType, amount]) => json[assetType] = amount.toString());
      return json;
    }

    setAssetBalance(asset, amount) {

        // deserialize amount
        if (amount !== undefined && !(amount instanceof BigInteger)) amount = BigInteger.parse(amount);
        this.state[asset] = amount;
    }
    
    getBalances() {
      return this.state;
    }
    
    
    toString(indent = 0) {
      let str = "";
      Object.entries(stateOrAsset).forEach( ([assetType, amount]) => {

        str += GenUtils.kvLine("Asset", assetType, indent);
        str += GenUtils.kvLine("Amount", amount.toString(), indent);

      });

      return str;
    }
  }
  
  module.exports = HavenBalance;