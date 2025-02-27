import { type ValueEqualityFn, type Signal, signal, type WritableSignal, linkedSignal } from '@angular/core';

/**
 * Debounce a state. it will only emit a new value after the delay has passed.
 * Uses a linkedSignal under the hood. It will return the initial value immediately,
 * and then wait for the delay to pass before updating the value.
 * @param {() => T} function returning the value to be debounced, evaluated in a reactive context
 * @returns {*}  {Signal<T>}
 */
export const debouncedComputed = <T>(
  fn: () => T,
  options: {
    /**
     * The delay in milliseconds, defaults to 500
     */
    delay?: number;
    /**
     * equality function, passed to the linkedSignal
     */
    equal?: ValueEqualityFn<NoInfer<T>> | undefined;
  }
): Signal<T> => {
  let decayTime: number | undefined;
  let currentResult: T;
  const delay = options.delay || 500;
  const triggerSignal = signal(0);
  const returnValue: WritableSignal<T> = linkedSignal({
    source: () => ({
      value: fn(),
      time: triggerSignal(),
    }),
    computation: ({ value, time }) => {
      if (time === 0) {
        // use the time, because the value can be anything, including undefined
        currentResult = value; // initialize currentResult with the first value
      }
      if (!decayTime) {
        decayTime = Date.now() + delay;
        // make sure the value is updated after the delay, even if there isn't any update in the source signal
        setTimeout(
          () => triggerSignal.set(time + 1), // trigger the signal to update the value
          delay + 1 // add 1ms to make sure the signal is updated after the delay
        );
      }
      if (decayTime < Date.now()) {
        currentResult = value; // update the current result with the latest value
        decayTime = undefined; // clear the timeout
      }
      return currentResult;
    },
    equal: options.equal,
  });

  return returnValue.asReadonly();
};
