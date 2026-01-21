import {
  linkedSignal,
  type Signal,
  signal,
  type ValueEqualityFn,
  type WritableSignal
} from '@angular/core';

/**
 * Debounce a state. it will only emit a new value after the delay has passed.
 * Uses a linkedSignal under the hood. It will return the initial value immediately,
 * and then wait for the delay to pass before updating the value.
 * @param {() => T} function returning the value to be debounced, evaluated in a reactive context
 * @returns {*}  {Signal<T>}
 */
export const debouncedSignal = <T>(
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
): WritableSignal<T> => {
  let decayTime: number | undefined;
  let currentResult: T;
  let initialized = false;
  const delay = options.delay ?? 500;
  if (delay <= 0) {
    throw new Error('[debouncedSignal] delay must be a positive number');
  }
  /* c8 ignore start */
  const triggerSignal = signal(0);
  /* c8 ignore stop */
  return linkedSignal({
    source: () => ({
      value: fn(),
      time: triggerSignal()
    }),
    computation: ({ value, time }) => {
      // Initialize once with the very first value seen
      if (!initialized) {
        currentResult = value;
        initialized = true;
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
        // update the current result with the latest value when the decay has passed
        currentResult = value;
        decayTime = undefined; // clear the timeout
      }

      return currentResult;
    },
    equal: options.equal
  });
};

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
): Signal<T> => debouncedSignal(fn, options).asReadonly();
