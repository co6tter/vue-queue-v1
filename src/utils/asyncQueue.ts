class AsyncQueue {
  constructor(
    private _queues: (() => Promise<void>)[] = [],
    private _isProcessing = false,
  ) {}

  get isProcessing() {
    return this._isProcessing;
  }

  enqueue(task: () => Promise<void>) {
    this._queues.push(task);
    if (!this._isProcessing) {
      this.process();
    }
  }

  private async process() {
    this._isProcessing = true;
    while (this._queues.length) {
      try {
        console.log("queues", this._queues);
        const task = this._queues.shift();
        await task?.();
      } catch (error) {
        console.log(error);
      }
    }
    this._isProcessing = false;
  }
}

export default new AsyncQueue();
