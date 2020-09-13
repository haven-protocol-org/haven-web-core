/**
 * Enumerates Haven Tx Types.
 * 
 * @hideconstructor
 */
class HavenTxType {}

/**
 * Default priority (i.e. normal) (value=0).
 */
HavenTxType.CLASSIC = 0;

/**
 * Unimportant priority (value=1).
 */
HavenTxType.ONSHORE = 1;

/**
 * Normal priority (value=2).
 */
HavenTxType.OFFSHORE = 2;

/**
 * Elevated priority (value=3).
 */
HavenTxType.OFFSHORE_TO_OFFSHORE = 3;

module.exports = HavenTxType;