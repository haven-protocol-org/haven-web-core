/**
 * Enumerates Haven Tx Types.
 * 
 * @hideconstructor
 */
class HavenTxType {}

/**
 * transfer
 */
HavenTxType.TRANSFER = 0;

/**
 * exchange from USD
 */
HavenTxType.EXCHANGE_FROM_USD = 1;

/**
 * exchange to USD
 */
HavenTxType.EXCHANGE_TO_USD = 2;

module.exports = HavenTxType;