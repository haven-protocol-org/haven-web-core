export = MoneroDaemonUpdateDownloadResult;
declare const MoneroDaemonUpdateDownloadResult_base: typeof import("./MoneroDaemonUpdateCheckResult");
/**
 * Models the result of downloading an update.
 */
declare class MoneroDaemonUpdateDownloadResult extends MoneroDaemonUpdateDownloadResult_base {
    /**
     * Construct a download result.
     *
     * @param {MoneroDaemonUpdateCheckResult} is an existing result to copy from
     */
    constructor(result: any);
    /**
     * Get the path the update was downloaded to.
     *
     * @return {string} is the path the update was downloaded to
     */
    getDownloadPath(): string;
    setDownloadPath(downloadPath: any): MoneroDaemonUpdateDownloadResult;
}
