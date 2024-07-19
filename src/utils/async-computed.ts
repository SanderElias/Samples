/* eslint-disable max-len */
import { computed, DestroyRef, effect, inject, type Signal, signal } from '@angular/core';
import { firstValueFrom, isObservable, Observable } from 'rxjs';

type AsyncComputedFn<T> = () => Promise<T> | Observable<T>;
interface AsyncComputed {
  /**
   * @description Helper to get the result of a promise, or the first emission form a observable into an signal.
   * @template T type to use for the output signal, defaults to return type of the AsyncComputedFn
   * @param {AsyncComputedFn<T>} AsyncComputedFn function returning a promise or observable. the result is put into the signal when it arrives
   * @returns {*}  {(Signal<T | undefined>)}
   */
  <T>(cb: AsyncComputedFn<T>): Signal<T | undefined>;
  /**
   * @description Helper to get the result of a promise, or the first emission form a observable into an signal.
   * @template T type to use for the output signal, defaults to return type of the AsyncComputedFn
   * @template Y Type to use for the initalValue, default to the type of the initialValue
   * @param {AsyncComputedFn<T>} AsyncComputedFn function returning a promise or observable. the result is put into the signal when it arrives
   * @param {Y} [initialValue] the initial value of the signal.
   * @returns {*}  {(Signal<T | Y>)}
   */
  <X, Y>(cb: AsyncComputedFn<X>, initialValue: Y): Signal<X | Y>;
  /**
   * @description Helper to get the result of a promise, or the first emission form a observable into an signal.
   * @template T type to use for the output signal, defaults to return type of the AsyncComputedFn
   * @template Y Type to use for the initalValue, default to the type of the initialValue
   * @param {AsyncComputedFn<T>} AsyncComputedFn function returning a promise or observable. the result is put into the signal when it arrives
   * @param {Y} [initialValue] the initial value of the signal.
   * @param {DestroyRef} [destroyRef] a manual provided destroyRef. Mandatory when the function is used outside a injection context
   * @returns {*}  {(Signal<T | Y>)}
   */
  <X, Y>(cb: AsyncComputedFn<X>, initialValue: Y, destroyRef: DestroyRef): Signal<X | Y>;
}

export const asyncComputed: AsyncComputed = <T, Y>(
  cb: AsyncComputedFn<T>,
  initialValue?: Y,
  destroyRef = inject(DestroyRef)
): Signal<T | Y | undefined> => {
  const state = signal({
    value: initialValue,
    error: undefined,
  } as { value?: T | Y | undefined; error?: any });
  destroyRef.onDestroy(() => ref.destroy());
  const ref = effect(
    async () => {
      try {
        const outcome = cb();
        if (isObservable(outcome)) {
          const value = await firstValueFrom(outcome);
          state.set({ value, error: undefined });
        } else {
          const value = await outcome;
          state.set({ value, error: undefined });
        }
      } catch (e) {
        // todo: Handle this better somehow.
        state.set({ value: undefined, error: e });
        ref.destroy();
      } finally {
        ref.destroy();
      }
    },
    { manualCleanup: true }
  );

  return computed(() => {
    const currentState = state();
    if (currentState.error) {
      throw currentState.error;
    }
    return currentState.value;
  });
};
