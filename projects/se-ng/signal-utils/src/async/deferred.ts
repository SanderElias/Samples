/**
 * A Deferred object represents a promise that can be resolved or rejected externally.
 * It provides `resolve` and `reject` methods to control the state of the promise.
 *
 * @template T - The type of the value that the promise will resolve with.
 */
export class Deferred<T> {
  resolve!: (value: T) => void;
  reject!: (reason: any) => void;
  readonly promise = new Promise<T>((resolve, reject) => {
    this.resolve = resolve;
    this.reject = reject;
  });
}
