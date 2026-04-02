import { Component, computed, model, signal, type WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';

import { proxySignal } from './proxy-signal';

describe('proxySignal', () => {
  // Baseline behavior: reads track a single property and writes preserve sibling fields.
  it('proxies set and update for object sources', () => {
    const source = signal({
      selectedPrefixes: ['a'],
      searchText: 'hello'
    });
    const proxied = proxySignal('selectedPrefixes', source);

    expect(proxied()).toEqual(['a']);

    proxied.set(['x', 'y']);
    expect(source().selectedPrefixes).toEqual(['x', 'y']);
    expect(source().searchText).toBe('hello');
    expect(proxied()).toEqual(['x', 'y']);

    proxied.update(current => [...current, 'z']);
    expect(source().selectedPrefixes).toEqual(['x', 'y', 'z']);
    expect(source().searchText).toBe('hello');
    expect(proxied()).toEqual(['x', 'y', 'z']);
  });

  it('throws when set is called while source value is nullish', () => {
    type SourceShape = { selectedPrefixes: string[] };
    const source = signal<SourceShape | undefined>(undefined) as unknown as WritableSignal<SourceShape>;
    const proxied = proxySignal<SourceShape, 'selectedPrefixes'>(
      'selectedPrefixes',
      source
    );

    expect(() => proxied.set(['x'])).toThrowError('Source signal must be an object');
    expect(source()).toBeUndefined();
  });

  it('throws when the current source value is a primitive', () => {
    type SourceShape = { selectedPrefixes: string[] };
    const source = signal<unknown>(123) as unknown as WritableSignal<SourceShape>;
    const proxied = proxySignal<SourceShape, 'selectedPrefixes'>(
      'selectedPrefixes',
      source
    );

    // Only the read path (linkedSignal computation) validates the source type
    expect(() => proxied()).toThrowError('Source signal must be an object');
  });

  it('throws when source signal is not writable', () => {
    const source = signal({ selectedPrefixes: ['a'] });
    const readOnly = computed(() => source());

    expect(() =>
      proxySignal<{ selectedPrefixes: string[] }, 'selectedPrefixes'>(
        'selectedPrefixes',
        readOnly as unknown as WritableSignal<{ selectedPrefixes: string[] }>
      )
    ).toThrowError('Source signal must be writable');
  });

  // Read path aligns with Angular required model/input semantics: throws until value is bound.
  it('throws while required model is not yet provided and recovers after input is set', () => {
    type SourceShape = { selectedPrefixes: string[] };

    @Component({ selector: 'test-proxy-ng0950', template: '' })
    class TestComponent {
      src = model.required<SourceShape>();
    }

    TestBed.configureTestingModule({ imports: [TestComponent] });
    const fixture = TestBed.createComponent(TestComponent);

    const proxied = proxySignal<SourceShape, 'selectedPrefixes'>(
      'selectedPrefixes',
      fixture.componentInstance.src
    );

    // Before the required input is provided, Angular should throw required-signal errors.
    expect(() => proxied()).toThrowError(/NG0950|NG0952/);

    // After the input is provided, reading should work normally
    fixture.componentRef.setInput('src', { selectedPrefixes: ['a', 'b'] });
    fixture.detectChanges();
    expect(proxied()).toEqual(['a', 'b']);
  });

  // Strict write policy: set() requires an object-shaped source value.
  it('throws when set is called while source value is primitive', () => {
    type SourceShape = { selectedPrefixes: string[] };
    const source = signal<unknown>(123) as unknown as WritableSignal<SourceShape>;
    const proxied = proxySignal<SourceShape, 'selectedPrefixes'>(
      'selectedPrefixes',
      source
    );

    expect(() => proxied.set(['x'])).toThrowError('Source signal must be an object');
    expect(source()).toBe(123);
  });

  // Strict write policy: update() requires an object-shaped source value.
  it('throws when update is called while source value is nullish', () => {
    type SourceShape = { selectedPrefixes: string[] };
    const source = signal<SourceShape | undefined>(undefined) as unknown as WritableSignal<SourceShape>;
    const proxied = proxySignal<SourceShape, 'selectedPrefixes'>(
      'selectedPrefixes',
      source
    );

    expect(() => proxied.update(() => ['x'])).toThrowError();
  });

  // Same update() behavior for required model/input: throws before binding, works after binding.
  it('throws on update while required model is not yet provided and recovers after input is set', () => {
    type SourceShape = { selectedPrefixes: string[] };

    @Component({ selector: 'test-proxy-ng0950-update', template: '' })
    class TestComponent {
      src = model.required<SourceShape>();
    }

    TestBed.configureTestingModule({ imports: [TestComponent] });
    const fixture = TestBed.createComponent(TestComponent);

    const proxied = proxySignal<SourceShape, 'selectedPrefixes'>(
      'selectedPrefixes',
      fixture.componentInstance.src
    );

    expect(() => proxied.update(() => ['x'])).toThrowError(/NG0950|NG0952/);

    fixture.componentRef.setInput('src', { selectedPrefixes: ['a'] });
    fixture.detectChanges();

    proxied.update(current => [...current, 'b']);
    expect(proxied()).toEqual(['a', 'b']);
  });

  // Note: this demonstrates that deep proxy nesting works, but this is generally not a good pattern.
  // Why: each nested proxy adds another derived/write indirection layer, which makes ownership
  // of updates harder to reason about, increases coupling between object shape and signal wiring,
  // and can make failures/debugging less obvious than explicit updates at the owning level.
  it('supports three nested proxy levels while preserving sibling fields', () => {
    type DeepState = {
      rootLabel: string;
      level1: {
        level1Flag: boolean;
        level2: {
          value: number;
          sibling: string;
        };
      };
    };

    const source = signal<DeepState>({
      rootLabel: 'root',
      level1: {
        level1Flag: true,
        level2: {
          value: 1,
          sibling: 'keep-me'
        }
      }
    });

    const level1Proxy = proxySignal('level1', source);
    const level2Proxy = proxySignal('level2', level1Proxy);
    const valueProxy = proxySignal('value', level2Proxy);

    expect(level1Proxy().level1Flag).toBe(true);
    expect(level2Proxy().sibling).toBe('keep-me');
    expect(valueProxy()).toBe(1);

    valueProxy.set(5);
    expect(valueProxy()).toBe(5);
    expect(level2Proxy().value).toBe(5);
    expect(level1Proxy().level2.value).toBe(5);
    expect(source().level1.level2.value).toBe(5);
    expect(source().level1.level2.sibling).toBe('keep-me');
    expect(source().level1.level1Flag).toBe(true);
    expect(source().rootLabel).toBe('root');

    valueProxy.update(current => current + 2);
    expect(level2Proxy().value).toBe(7);
    expect(level1Proxy().level2.value).toBe(7);
    expect(source().level1.level2.value).toBe(7);
    expect(valueProxy()).toBe(7);

    level2Proxy.update(current => ({
      ...current,
      sibling: 'changed-at-level2'
    }));
    expect(level2Proxy().sibling).toBe('changed-at-level2');
    expect(valueProxy()).toBe(7);
    expect(level1Proxy().level2.sibling).toBe('changed-at-level2');
    expect(source().level1.level2.sibling).toBe('changed-at-level2');

    level1Proxy.update(current => ({
      ...current,
      level1Flag: false
    }));
    expect(level1Proxy().level1Flag).toBe(false);
    expect(level2Proxy().value).toBe(7);
    expect(level2Proxy().sibling).toBe('changed-at-level2');
    expect(source().level1.level1Flag).toBe(false);
    expect(source().level1.level2.value).toBe(7);

    source.update(current => ({
      ...current,
      rootLabel: 'root-updated'
    }));
    expect(source().rootLabel).toBe('root-updated');
    expect(level1Proxy().level1Flag).toBe(false);
    expect(level2Proxy().sibling).toBe('changed-at-level2');
    expect(valueProxy()).toBe(7);
  });
});
