export = MoneroDaemonUpdateCheckResult;
/**
 * Models the result of checking for a daemon update.
 */
declare class MoneroDaemonUpdateCheckResult {
    /**
     * Deep copy constructor.
     *
     * @param {MoneroDaemonUpdateCheckResult} is an existing result to deep copy from
     */
    constructor(result: any);
    state: {};
    /**
     * Indicates if an update is available.
     *
     * @return {boolean} true if an update is available, false otherwise
     */
    isUpdateAvailable(): boolean;
    setIsUpdateAvailable(isUpdateAvailable: any): MoneroDaemonUpdateCheckResult;
    /**
     * Get the update's version.
     *
     * @return {string} is the update's version
     */
    getVersion(): string;
    setVersion(version: any): MoneroDaemonUpdateCheckResult;
    /**
     * Get the update's hash.
     *
     * @return {string} is the update's hash
     */
    getHash(): string;
    setHash(hash: any): MoneroDaemonUpdateCheckResult;
    /**
     * Get the uri to automatically download the update.
     *
     * @return {string} is the uri to automatically download the update
     */
    getAutoUri(): string;
    setAutoUri(autoUri: any): MoneroDaemonUpdateCheckResult;
    /**
     * Get the uri to manually download the update.
     *
     * @return {string} is the uri to manually download the update
     */
    getUserUri(): string;
    setUserUri(userUri: any): MoneroDaemonUpdateCheckResult;
}
