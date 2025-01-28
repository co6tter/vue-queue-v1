export type ErrorHandler = (error: unknown) => void;

class ErrorCallback {
  private _errorHandler?: ErrorHandler;

  constructor(private _isRunning = false) {}

  get isRunning() {
    return this._isRunning;
  }

  addErrorHandler(errorHandler: ErrorHandler) {
    this._errorHandler = errorHandler;
  }

  removeErrorHandler() {
    this._errorHandler = undefined;
  }

  run() {
    try {
      this._isRunning = true;
      console.log(`run method is running: ${this._isRunning}`);
      throw new Error("run method error");
    } catch (error) {
      this._isRunning = false;
      if (this._errorHandler) {
        this._errorHandler(error);
      }
    } finally {
      this._isRunning = false;
    }
  }
}

export default new ErrorCallback();
