import { signal } from '@angular/core';
import { Observable, firstValueFrom, of, shareReplay } from 'rxjs';

export type ToWritableSignalOptions<T> = {
  initialValue: T | undefined;
  errorCallback: (err: any) => void | undefined;
};

export const toWritableSignal = <T>(src: Observable<T>, { initialValue, errorCallback } = {} as ToWritableSignalOptions<T>) => {
  const sig = signal<T | undefined>(initialValue);
  errorCallback ??= (err: any) => undefined;
  firstValueFrom(src)
    .then(val => sig.set(val))
    .catch(errorCallback);
  return sig;
};

// class Sample {
//   data$ = of([1, 2, 3]).pipe( // any observable will do, most often an http-get
//     shareReplay({ bufferSize: 1, refCount: false }) // keep original in memory until the class is destroyed
//   );

//   data = toWritableSignal(this.data$); // but we need to convert it to a writable signal
// }
