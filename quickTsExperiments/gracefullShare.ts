import {
  ShareConfig,
  ReplaySubject,
  timer,
  interval,
  tap,
  EMPTY,
  Subject,
  merge,
  filter,
  share,
  take,
  lastValueFrom,
  BehaviorSubject,
  NEVER,
} from 'rxjs';

const defaultTimeout = 5000;

const shareOptions = <T>(): ShareConfig<T> => {
  const inGrace = new BehaviorSubject(false);
  return {
    connector() {
      inGrace.next(false);
      return new ReplaySubject<T>(1);
    },
    resetOnError() {
      inGrace.next(true);
      return EMPTY;
    },
    resetOnComplete() {
      inGrace.next(true);
      return EMPTY;
    },
    resetOnRefCountZero() {
      const ig = inGrace;
      // const ig = NEVER
      console.log(`start caching for ${defaultTimeout}ms`);
      return merge(ig.pipe(filter(g => g === true)), timer(defaultTimeout)).pipe(
        tap(() => {
          console.log(`[cache delete] `);
          inGrace.next(false)
        }),
      );
    },
  };
};

(async () => {
  const logSub = {
    next: r => console.log(r),
    complete: () => console.log('competed'),
  };
  const something$ = interval(250).pipe(tap(c => console.log('o',c)),share(shareOptions()));

  // prime the cache.
  await lastValueFrom(something$.pipe(take(4), tap(logSub)));
  // await new Promise(r => setTimeout(r, 2500));
  something$.pipe(take(5)).subscribe(logSub);
})();
