import {
  isWritableSignal,
  linkedSignal,
  type Signal,
  signal,
  type ValueEqualityFn,
  type WritableSignal
} from '@angular/core';

/**
 * Throttles a signal, emitting the latest value at most once per `delay` ms.
 *
 * Behavior differs from classical trailing-edge debounce:
 * - The **initial value** is returned immediately (signals require an initial value).
 * - During a burst of changes a new value is emitted every `delay` ms — the window
 *   is anchored to the **first** change in each interval, not the last.  Changes
 *   that arrive within the active window are suppressed; the latest of them is
 *   picked up when the window closes.
 * - If the burst is **shorter** than `delay` the observable behaviour is identical
 *   to trailing-edge debounce: one emission after the burst ends.
 *
 * Use this when you want to prevent update storms while still keeping consumers
 * reasonably current during a sustained burst.  If you need true trailing-edge
 * debounce (emit only after `delay` ms of silence) you need a different primitive.
 *
 * Uses a `linkedSignal` under the hood so no injection context is required.
 *
 * @param fn  Reactive function whose value should be throttled, evaluated in a reactive context.
 * @returns A `WritableSignal<T>` that proxies `set`/`update` to the source signal
 *          when `fn` is itself a `WritableSignal`.
 */
export const debouncedSignal = <T>(
  fn: () => T,
  options: {
    /**
     * The throttle window in milliseconds. At most one emission per window.
     * Defaults to 500.
     */
    delay?: number;
    /**
     * Equality function passed to the underlying `linkedSignal`.
     * Prevents downstream propagation when the throttled value has not changed.
     */
    equal?: ValueEqualityFn<NoInfer<T>> | undefined;
  }
): WritableSignal<T> => {
  let decayTime: number | undefined;
  const delay = options.delay ?? 500;
  if (delay <= 0) {
    throw new Error('[debouncedSignal] delay must be a positive number');
  }
  const triggerSignal = signal(0);
  const linked: WritableSignal<T> = linkedSignal({
    source: () => ({
      value: fn(),
      time: triggerSignal()
    }),
    computation: ({ value, time }, previous) => {
      // Initialize once with the very first value seen
      if (!previous) {
        return value;
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
        decayTime = undefined; // clear the timeout
        return value; // update the value if the decay time has passed
      }

      return previous.value; //  return the previous value if we're still within the decay window
    },
    equal: options.equal,
    debugName: 'debouncedSignal'
  });

  //  when the original signal, we proxy the set and update method to the linked signal, so that the user can use the same API as a normal signal
  if (isWritableSignal(fn as unknown as Signal<T>)) {
    const originSignal = fn as unknown as WritableSignal<T>;
    linked.set = originSignal.set;
    linked.update = originSignal.update;
  }
  return linked;
};

/**
 * Read-only variant of `debouncedSignal`. Returns a `Signal<T>` that throttles
 * the source reactive function to at most one emission per `delay` ms.
 *
 * See `debouncedSignal` for full behavior notes.
 */
export const debouncedComputed = <T>(
  fn: () => T,
  options: {
    /**
     * The throttle window in milliseconds. At most one emission per window.
     * Defaults to 500.
     */
    delay?: number;
    /**
     * Equality function passed to the underlying `linkedSignal`.
     */
    equal?: ValueEqualityFn<NoInfer<T>> | undefined;
  }
): Signal<T> => debouncedSignal(fn, options).asReadonly();
