import {
  Injector,
  provideZonelessChangeDetection,
  runInInjectionContext,
  signal
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { awaitSignal, injectAwaitSignal } from './await-signal';

describe('awaitSignal', () => {
  let injector: Injector;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
      teardown: { destroyAfterEach: true }
    });
    injector = TestBed.inject(Injector);
  });

  it('resolves when predicate is immediately true', async () => {
    const sig = runInInjectionContext(injector, () => signal(42));
    const result = await runInInjectionContext(injector, () =>
      awaitSignal(sig, v => v === 42)
    );
    expect(result).toBe(42);
  });

  it('resolves when predicate becomes true later', async () => {
    const sig = runInInjectionContext(injector, () => signal(0));
    const result = runInInjectionContext(injector, () =>
      awaitSignal(sig, v => v === 5)
    );
    sig.set(5);

    await expect(result).resolves.toBe(5);
  });

  it('rejects with abort reason when AbortSignal is aborted', async () => {
    const sig = runInInjectionContext(injector, () => signal(0));
    const controller = new AbortController();
    const result = runInInjectionContext(injector, () =>
      awaitSignal(sig, v => v === 5, controller.signal)
    );
    controller.abort(new Error('cancelled'));
    await expect(result).rejects.toThrow('cancelled');
  });

  it('rejects with the native AbortError when AbortSignal aborts without a reason', async () => {
    const sig = runInInjectionContext(injector, () => signal(0));
    const controller = new AbortController();
    const result = runInInjectionContext(injector, () =>
      awaitSignal(sig, v => v === 5, controller.signal)
    );
    controller.abort();
    await expect(result).rejects.toThrow('This operation was aborted');
  });

  it('rejects if predicate throws', async () => {
    const sig = runInInjectionContext(injector, () => signal(1));
    await expect(
      runInInjectionContext(injector, () =>
        awaitSignal(sig, () => {
          throw new Error('fail');
        })
      )
    ).rejects.toThrow('fail');
  });

  it('silently retries when signal throws NG0950 before resolving', async () => {
    const underlying = runInInjectionContext(injector, () => signal(0));
    // Simulates input.required() before a value is bound: throws NG0950 until the value is set
    const requiredLikeSig = () => {
      const v = underlying();
      if (v === 0) throw new Error('NG0950: Required input is accessed before a value is set.');
      return v;
    };

    const result = runInInjectionContext(injector, () =>
      awaitSignal(requiredLikeSig, v => v === 5)
    );

    // Force the initial effect run NOW (v=0 → throws NG0950, silently ignored)
    TestBed.flushEffects();
    // Now set the real value — triggers a second run that resolves
    underlying.set(5);

    await expect(result).resolves.toBe(5);
  });

  it('works with injectAwaitSignal in injection context', async () => {
    const sig = runInInjectionContext(injector, () => signal('ok'));
    const result = await runInInjectionContext(injector, () =>
      injectAwaitSignal()(sig, v => v === 'ok')
    );
    expect(result).toBe('ok');
  });
});
