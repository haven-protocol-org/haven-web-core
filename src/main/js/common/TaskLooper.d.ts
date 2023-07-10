export = TaskLooper;
/**
 * Run a task in a fixed period loop.
 */
declare class TaskLooper {
    /**
     * Build the looper with a function to invoke on a fixed period loop.
     *
     * @param {function} fn - the function to invoke
     */
    constructor(fn: Function);
    fn: Function;
    /**
     * Start the task loop.
     *
     * @param {int} periodInMs the loop period in milliseconds
     */
    start(periodInMs: int): void;
    periodInMs: any;
    isStarted: boolean;
    /**
     * Stop the task loop.
     */
    stop(): void;
    /**
     * Set the loop period in milliseconds.
     *
     * @param {int} periodInMs the loop period in milliseconds
     */
    setPeriodInMs(periodInMs: int): void;
    _runLoop(): Promise<void>;
    isLooping: boolean;
}
