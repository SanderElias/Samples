import { Injector, provideZonelessChangeDetection, runInInjectionContext, signal } from '@angular/core';
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
    const result = await runInInjectionContext(injector, () => awaitSignal(sig, v => v === 42));
    expect(result).toBe(42);
  });

  it('resolves when predicate becomes true later', async () => {
    const sig = runInInjectionContext(injector, () => signal(0));
    const result = runInInjectionContext(injector, () => awaitSignal(sig, v => v === 5));
    sig.set(5);

    await expect(result).resolves.toBe(5);
  });

  it('rejects when the signal is destroyed before resolving', async () => {
    const sig = runInInjectionContext(injector, () => signal(0));
    const result = runInInjectionContext(injector, () => awaitSignal(sig, v => v === 5));
    setTimeout(() => sig.set(4), 1);

    /**
     * there is trickery here!
     * We are using the setTimeout to trigger the thing _after_ this completes.
     * however the the teardown logic will still run, and it will clean up the signal.
     * This means that the signal will be destroyed before the predicate has a chance to be satisfied.
     * and the rejects will happen. (assertion is awaited to avoid Vitest warning)
     */

    await expect(result).rejects.toThrow('[awaitSignal] the provided signal was destroyed before the predicate was satisfied');
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

  it('works with injectAwaitSignal in injection context', async () => {
    const sig = runInInjectionContext(injector, () => signal('ok'));
    const result = await runInInjectionContext(injector, () => injectAwaitSignal()(sig, v => v === 'ok'));
    expect(result).toBe('ok');
  });
});
