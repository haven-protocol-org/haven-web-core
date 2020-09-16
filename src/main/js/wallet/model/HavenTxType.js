/**
 * Enumerates Haven Tx Types.
 * 
 * @hideconstructor
 */
class HavenTxType {}

/**
 * classic XHV -> XHV
 */
HavenTxType.CLASSIC = 0;

/**
 * xUSD -> XHV
 */
HavenTxType.ONSHORE = 1;

/**
 * XHV -> xUSD
 */
HavenTxType.OFFSHORE = 2;

/**
 * xUSD -> xUSD
 */
HavenTxType.OFFSHORE_TO_OFFSHORE = 3;

module.exports = HavenTxType;