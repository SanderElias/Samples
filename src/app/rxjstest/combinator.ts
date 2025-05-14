import { Observable, Subscriber, Subscription } from 'rxjs';

type CombinatorFn<R, T> = (source: R) => Observable<T>[];

export function combinator<R, T>(fn?: CombinatorFn<R, T> | number, debounceTime = 50): (source: Observable<R>) => Observable<T[]> {
  interface clientState {
    sub: Subscription;
    last?: T;
    index: number;
  }

  const clients = new Map<Observable<T>, clientState>();
  const result = [] as T[];
  let debounceTimer: any;
  let lastEmitTime = 0;
  let subscriber: Subscriber<T[]>;
  const op = new Observable<T[]>(s => {
    subscriber = s;
    return cleanUp;
  });

  return (source: Observable<R>) => {
    debounceTime = typeof fn === 'number' ? fn : debounceTime;
    source.subscribe((x: R) => {
      const sources = typeof fn === 'function' ? fn(x) : (x as Observable<T>[]);
      cleanStaleSubscriptions(sources);
      sources.forEach(checkAndSubscribeWhenNew);
    });
    return op;
  };

  function cleanStaleSubscriptions(sources: Observable<T>[]) {
    clients.forEach((sub, key) => {
      if (!sources.includes(key)) {
        sub.sub.unsubscribe();
        clients.delete(key);
      }
    });
  }

  function checkAndSubscribeWhenNew(source, index) {
    const client = clients.get(source);
    if (client === undefined) {
      const subObserver = {
        next: value => {
          if (res.last !== value) {
            res.last = value;
            emitResults();
          }
        },
        error: err => subscriber.error(err),
        complete: () => {}
      };
      const res = {
        sub: source.subscribe(subObserver),
        last: undefined,
        index
      };
      clients.set(source, res);
      return;
    }
    client.index = index;
  }

  function cleanUp() {
    clearTimeout(debounceTimer);
    clients.forEach(client => client.sub.unsubscribe());
    clients.clear();
  }

  function doEmit() {
    result.length = clients.size; // make sure there are no stale values when the array has shrunken
    clients.forEach(({ last, index }) => (result[index] = last!));
    lastEmitTime = Date.now();
    debounceTimer = undefined;
    subscriber.next(result);
  }
  function emitResults() {
    debounceTimer && clearTimeout(debounceTimer);
    debounceTimer = setTimeout(doEmit, debounceTime);
    if (Date.now() - lastEmitTime > debounceTime) {
      debounceTimer && clearTimeout(debounceTimer);
      doEmit();
    }
  }
}
