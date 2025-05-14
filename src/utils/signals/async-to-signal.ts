import { CreateComputedOptions, DestroyRef, inject, isSignal, Signal, signal, WritableSignal } from '@angular/core';
import { toObservable, ToObservableOptions } from '@angular/core/rxjs-interop';
import { from, isObservable, Observable, of, switchMap } from 'rxjs';

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
export interface DataResultInitial {
  loading: true;
}
export interface DataResultSucces<T> {
  loading: false;
  data: T;
}
export interface DataResultError {
  loading: false;
  error: any;
}
export type DataResult<T> = Prettify<DataResultInitial | DataResultSucces<T> | DataResultError>;

export type AsyncInput<I> = Signal<I> | WritableSignal<I> | Observable<I> | Promise<I> | I;
/**
 *
 * @param input Signal, promise or observable with the value to feed to the loader function
 * @param loader Function that takes the input value and returns a promise or observable with the result
 * @param {initialValue, signalToUse} Optional options
 * > **NOTE:** InitialValue will only be used when creating a signal, defaults to undefined
 *
 * > **NOTE:** when no signalToUse is provided, a writable signal will be created.
 * @returns
 */
export function asyncToSignal<I, T>(
  input: AsyncInput<I>,
  loader: (start: I) => Observable<DataResult<T> | T> | Promise<DataResult<T> | T>,
  options: AsyncToSignalOptions<T> = {}
): Signal<DataResult<T>> {
  try {
    inject(DestroyRef).onDestroy(() => {
      unSub.unsubscribe();
    });
    const startData: DataResult<T> =
      options.initialValue !== undefined ? { loading: false, data: options.initialValue } : { loading: true };
    const outputSignal = options.signalToUse ?? signal(startData);
    const start = convertToObservable(input);
    const unSub = start.pipe(switchMap(loader)).subscribe({
      next: data => outputSignal.set(isDataResult(data) ? data : { loading: false, data }),
      error: error => outputSignal.set({ loading: false, error }),
      complete: () => undefined // todo: decide if we want to handle completion
    });

    return outputSignal.asReadonly();
  } catch (e) {
    const { message } = e as Error;
    if (message.startsWith('NG0203')) {
      throw new Error('asyncToSignal: Must be run inside the injection context');
    } else {
      throw e;
    }
  }
}

const convertToObservable = <I>(x: AsyncInput<I>): Observable<I> => {
  if (isSignal(x)) {
    return toObservable(x);
  }
  if (isObservable(x)) {
    return x;
  }
  if (isPromise(x)) {
    return from(x);
  }

  return of(x);
};

/**
 * @param x unknown value
 * @returns True when `x.then` is a function. We are for 99.9% sure its a promise
 */
const isPromise = <T>(x: T | Promise<T>): x is Promise<T> => typeof (x as Promise<T>).then === 'function';

const isDataResult = <T>(x: T | DataResult<T>): x is DataResult<T> => {
  return typeof x === 'object' && x !== null && 'loading' in x;
};
export type AsyncToSignalOptions<T> = {
  initialValue?: T;
  signalToUse?: WritableSignal<DataResult<T>>;
} & CreateComputedOptions<T> &
  ToObservableOptions;
