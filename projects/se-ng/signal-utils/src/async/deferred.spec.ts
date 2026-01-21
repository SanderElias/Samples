
import { describe, it, expect } from 'vitest';
import { Deferred } from './deferred';

describe('Deferred', () => {
  it('should resolve with the given value', async () => {
    const deferred = new Deferred<number>();
    setTimeout(() => deferred.resolve(42), 10);
    await expect(deferred.promise).resolves.toBe(42);
  });

  it('should reject with the given reason', async () => {
    const deferred = new Deferred<number>();
    setTimeout(() => deferred.reject('error'), 10);
    await expect(deferred.promise).rejects.toBe('error');
  });

  it('should have a promise property', () => {
    const deferred = new Deferred<void>();
    expect(deferred.promise).toBeInstanceOf(Promise);
  });

  it('should allow resolve and reject to be called only once', async () => {
    const deferred = new Deferred<number>();
    deferred.resolve(1);
    // Subsequent calls should have no effect
    deferred.resolve(2);
    deferred.reject('error');
    await expect(deferred.promise).resolves.toBe(1);
  });
});
