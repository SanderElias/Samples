import  { Observable } from 'rxjs';

export const takeUntilAbort =
  <T>(signal: AbortSignal) =>
  (source: Observable<T>) =>
    new Observable<T>(subscriber => {
      const subscription = source.subscribe(subscriber);
      signal.addEventListener('abort', () => {
        subscription.unsubscribe();
        subscriber.complete();
      });
      return subscription;
    });
