# SignalUtils

This library provides some utilities to make it easier to work with
signals in Angular.

## Installation

To install this library, run:

```bash
pnpm install @se-ng/signal-utils --save
```

## Utilities (exports)

This section lists the package exports with brief one-line type
indications, examples, and source links.

### Reactive / Signals helpers ✅

- **`asyncComputed`** — async helper to populate a `Signal` from
  promises, observables, or async-iterables.
  - Signature:
    `asyncComputed<T>(cb, initial?, destroyRef?)` ->
    `Signal<T | initial | undefined>`
  - Source: [`src/reactive/async-computed.ts`](./src/reactive/async-computed.ts)

  Example:

  ```ts
  const userSignal = asyncComputed(async () => {
    const res = await fetch('/api/user');
    return await res.json();
  });
  // userSignal() === undefined initially, later contains the fetched object
  ```

- **`computedResource`** — resource wrapper exposing
  `{ value: Signal, status, stream, error }`.
  - Signature:
    `computedResource<T>(cb, initial?, destroyRef?)` ->
    `Signal<Resource<T | initial | undefined>>`
  - Source: [`src/reactive/async-resource.ts`](./src/reactive/async-resource.ts)

  Example:

  ```ts
  const resource = computedResource(async () =>
    fetch('/items').then(r => r.json())
  );
  // access current value: resource().value(); resource().status
  ```

- **`debouncedSignal` / `debouncedComputed`** — debounce helpers for signals.
  - `debouncedSignal<T>(fn, {delay?, equal?}) => WritableSignal<T>`
  - `debouncedComputed<T>(...) => Signal<T>`
  - Source: [`src/reactive/debounced-computed.ts`](./src/reactive/debounced-computed.ts)

  Example:

  ```ts
  const debounced = debouncedSignal(() => searchTerm(), { delay: 200 });
  // debounced.asReadonly() or debounced() to read
  ```

- **`injectAwaitSignal` / `awaitSignal`** — wait for a signal to
  satisfy a predicate.
  - `awaitSignal<T>(signalFn, predicate) => Promise<T>`
  - `injectAwaitSignal(injector?) => <T>(signalFn, predicate) => Promise<T>`
  - Source: [`src/reactive/await-signal.ts`](./src/reactive/await-signal.ts)

  Example:

  ```ts
  await awaitSignal(
    () => readyFlag(),
    v => v === true
  );
  // resolves when readyFlag() becomes true
  ```

---

### Async & control helpers ✅

- **`Deferred`** — a simple deferred promise container
  (useful for awaiting conditions).
  - `class Deferred<T> {
      promise: Promise<T>;
      resolve: (v: T) => void;
      reject: (e: any) => void;
    }`
  - Source: [`src/async/deferred.ts`](./src/async/deferred.ts)

  Example:

  ```ts
  const d = new Deferred<number>();
  setTimeout(() => d.resolve(42), 100);
  const answer = await d.promise; // 42
  ```

---

### HTTP client ✅

- **`HttpActionClient`** — small `HttpClient` wrapper exposing
  async methods and per-method busy `Signal`s.
  - `class HttpActionClient` (
      methods return `Promise<any>`;
      `busyMethods: Record<Method, Signal<boolean>>`
    )
  - Source: [`src/http/http-action-client.ts`](./src/http/http-action-client.ts)

  Example:

  ```ts
  const data = await httpActionClient.get('/api/items');
  if (httpActionClient.isBusy()) {
    /* show spinner */
  }
  ```

---

### Runtime type guards & helpers ✅

- **`isAsyncIterable`** — `isAsyncIterable(x): x is AsyncIterable<any>`
  - Source:
    [`src/guards/is-async-iterable.ts`](./src/guards/is-async-iterable.ts)

  Example:

  ```ts
  if (isAsyncIterable(x)) {
    for await (const v of x) {
      console.log(v);
    }
  }
  ```

- **`isPromise`** — `isPromise<T>(x): x is Promise<T>`
  - Source: [`src/guards/is-promise.ts`](./src/guards/is-promise.ts)

  Example:

  ```ts
  async function handle(p: unknown) {
    if (isPromise(p)) {
      const value = await p;
      console.log(value);
    }
  }
  ```

- **`isDate`** — `isDate(x): x is Date`
  - Source: [`src/guards/is-date.ts`](./src/guards/is-date.ts)

  Example:

  ```ts
  if (isDate(val)) {
    console.log(val.toISOString());
  }
  ```

- **`isObject`** — `isObject<T>(x: T): boolean` (object, not null/array/date)
  - Source: [`src/guards/is-object.ts`](./src/guards/is-object.ts)

  Example:

  ```ts
  if (isObject(obj)) {
    for (const key of Object.keys(obj)) {
      console.log(key, (obj as Record<string, unknown>)[key]);
    }
  }
  ```

- **`isIntegerString`** — `isIntegerString(str): boolean` (digits-only integer check)
  - Source:
    [`src/guards/is-integer-string.ts`](./src/guards/is-integer-string.ts)

  Example:

  ```ts
  if (isIntegerString('01')) {
    const idx = parseInt('01', 10);
    // use idx to index into an array safely
  }
  ```

- **`isTemporal`** — `isTemporal(x): x is TemporalType`
  - Detect Temporal objects by their `Symbol.toStringTag` (works with the polyfill or native Temporal when available).
  - Source: [`src/guards/is-temporal.ts`](./src/guards/is-temporal.ts)

  Example:

  ```ts
  if (isTemporal(val)) {
    // safe to test for Temporal subtypes or call Temporal methods
  }
  ```

- **Specific Temporal guards** (all from `src/guards/is-temporal.ts`):
  - `isTemporalDuration` — `isTemporalDuration(x): x is Temporal.Duration`
  - `isTemporalInstant` — `isTemporalInstant(x): x is Temporal.Instant`
  - `isTemporalPlainDate` — `isTemporalPlainDate(x): x is Temporal.PlainDate`
  - `isTemporalPlainDateTime` — `isTemporalPlainDateTime(x): x is Temporal.PlainDateTime`
  - `isTemporalPlainMonthDay` — `isTemporalPlainMonthDay(x): x is Temporal.PlainMonthDay`
  - `isTemporalPlainTime` — `isTemporalPlainTime(x): x is Temporal.PlainTime`
  - `isTemporalPlainYearMonth` — `isTemporalPlainYearMonth(x): x is Temporal.PlainYearMonth`
  - `isTemporalZonedDateTime` — `isTemporalZonedDateTime(x): x is Temporal.ZonedDateTime`

  Example:

  ```ts
  if (isTemporalDuration(v)) {
    // v is a Duration
  }
  ```

---

### Assertions ✅

- **`assertDefined`** — Ensure a value is defined (not `undefined`) and return it narrowed to exclude `undefined`.
  - Signature: `assertDefined<T>(value: T | undefined, message: string): T`
  - Source: [`src/helpers/assert-defined.ts`](./src/helpers/assert-defined.ts)

  Example:

  ```ts
  const maybe = Math.random() > 0.5 ? 1 : undefined;
  const value = assertDefined(maybe, 'missing value'); // throws when maybe is undefined
  ```

### Deep & structural utilities ✅

- **`cloneDeep`** — deep clone handling circular refs, Maps, Sets, Dates, RegExp.
  - `cloneDeep<T>(value: T): T`
  - Source: [`src/deep/clone-deep.ts`](./src/deep/clone-deep.ts)

  Example: `const copy = cloneDeep(original); // no shared references`

- **`deepEqual`** — deep structural equality check for:
  objects, arrays, maps, sets, dates and typed arrays.
  - `deepEqual(a, b): boolean`
  - Source: [`src/deep/deep-equal.ts`](./src/deep/deep-equal.ts)

  Example: `deepEqual({ a: 1 }, { a: 1 }) // true`

- **`mergeDeep`** — deep merge with configurable iterable strategies (`concat|replace|merge`).
  - `mergeDeep<A,B>(target:A, source:B, options?) => DeepMergeObjects<A,B>`
  - Source: [`src/deep/merge-deep.ts`](./src/deep/merge-deep.ts)

  Example:

  ```ts
  mergeDeep({ items: [1] }, { items: [2] }, { iterableMergeStrategy: 'merge' });
  // -> { items: [2] } (source values at indices take precedence)
  ```

- **`deepDiff`** — compute a minimal patch object with changed keys
  between two objects.
  - `deepDiff<T>(a: T, b: T): Partial<T>` (reconstructed patch)
  - Source: [`src/deep/deep-diff.ts`](./src/deep/deep-diff.ts)

  Example: `deepDiff({a:1,b:2}, {a:1,b:3}) // -> { b: 3 }`

---

### Path & flatten utilities ✅

- **`objFromPath`** — builds an object or array from a dot/bracket
  path and a value.
  - `objFromPath<T>(path: string, value?): T`
  - Source: [`src/path/obj-from-path.ts`](./src/path/obj-from-path.ts)

- **`pathToArray`** — `pathToArray(path: string): string[] | undefined`
  - Convert a dot/bracket path into an array of path segments. Commas are also treated as separators (e.g. `a,b.c` -> `['a','b','c']`). Keys enclosed in quotes in bracket notation are unwrapped (e.g. `a["b"]` -> `['a','b']`) and quoted keys may contain escaped quotes which are unescaped in the returned token (e.g. `a["b\"c"]` -> `['a','b"c']`). Returns `undefined` for invalid paths (leading/trailing/consecutive separators, empty comma groups, unbalanced or malformed quotes, or empty bracket contents).
  - Source: [`src/path/path-to-array.ts`](./src/path/path-to-array.ts)

  Example: `objFromPath('a[0].b', 5) // -> { a: [ { b: 5 } ] }`

- **`flattenRecord` / `unFlattenRecord`** — flatten/unflatten nested
  objects/arrays to/from dot-path records.
  - `flattenRecord(obj, {onCircular?, marker?}) => Record<string, any>`
  - `unFlattenRecord(record) => Record<string, any>`
  - Source:
    [`src/path/flatten-record.ts`](./src/path/flatten-record.ts),
    [`src/path/un-flattenRecord.ts`](./src/path/un-flattenRecord.ts)

  Example:

  ```ts
  flattenRecord({ user: { name: 'Alice' } }); // -> { 'user.name': 'Alice' }
  unFlattenRecord({ 'user.name': 'Alice' }); // -> { user: { name: 'Alice' } }
  ```

---

## Notes & Edge Cases ⚠️

- Guards:
  - `isPromise` detects thenables by checking for a `.then` method. Objects
    that merely implement `then` will be considered promises.
  - `isAsyncIterable` checks for `Symbol.asyncIterator` and will only return
    true for true async iterables.
  - `isDate` checks for a `getMonth` method; objects exposing a similarly
    named function may be misclassified in fringe cases.

- `flattenRecord` / `unFlattenRecord`:
  - `flattenRecord` can mark or throw on circular references depending on
    the `onCircular` option.
  - `unFlattenRecord` uses integer-like path segments to build arrays; it will
    produce sparse arrays when indices are non-contiguous.

- `deepDiff`:
  - The function produces a reconstructed patch containing only changed
    keys. For arrays it will reconstruct sparse changes (only changed indices
    are present) — be mindful when applying patches or merging results.

- `mergeDeep`:
  - Array/iterable strategy options (`concat`, `replace`, `merge`) change
    behavior substantially:
    - `merge` performs index-wise merging (source indices take precedence)
    - `concat` appends
    - `replace` overwrites
  - Merging `Set` or `Map` with a non-matching type will throw unless
    `replace` is used.

- `cloneDeep` / `deepEqual`:
  - `cloneDeep` preserves circular references and copies Dates,
    RegExp and TypedArrays appropriately. Functions and prototype chains are
    not deeply cloned.
  - `deepEqual` covers most builtin types (including Maps/Sets) but can be
    surprised by objects with custom `valueOf`/`toString` behavior.

- Async helpers (`asyncComputed`, `computedResource`):
  - Both use an `AbortController` for cancellation when re-run and rely on a
    `DestroyRef` for cleanup. When used outside injection context you must
    provide a `DestroyRef` explicitly.

- `HttpActionClient`:
  - Per-method busy counters are incremented before the request and
    decremented in `finally`. Consult `busyMethods` to reflect per-method
    busy state in the UI.

- `Deferred`:
  - Handy for externally resolving a promise — remember to resolve or reject to
    avoid leaving pending promises and potential memory leaks.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

<!-- JSON-LD: machine-readable metadata (compact) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  "name": "@se-ng/signal-utils",
  "description": "Utilities for Angular signals and small helper functions.",
  "programmingLanguage": "TypeScript",
  "mainEntity": {
    "@type": "Dataset",
    "name": "API",
    "url": "./API.json"
  },
  "keywords": ["angular", "signals", "utilities", "deepEqual", "mergeDeep"],
  "about": {
    "@type": "Thing",
    "name": "Signal utilities"
  }
}
</script>
