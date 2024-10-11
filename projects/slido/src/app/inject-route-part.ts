import { computed, DestroyRef, inject, signal, Signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

/**
 * Helper to get a part of the route (split by '/')
 * @param pos the index of the part in the url
 * @returns signal with the value of the part or an empty string if the part does not exist
 * the signal will throw when the router throws
 */
export function injectRoutePart(pos: number): Signal<string> {
  const router = inject(Router);
  const state = signal<{ value?: string; error?: any }>({ value: '', error: undefined });
  inject(DestroyRef).onDestroy(() => sub.unsubscribe());

  const sub = router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(({ url }) => url)
    )
    .subscribe({
      next: url => {
        const parts = url.split('/');
        state.set({ value: parts[pos] ?? '' });
      },
      error: error => state.set({ error }),
    });

  return computed(() => {
    const curState = state();
    if (curState.error) {
      throw curState.error;
    }

    return curState.value as string;
  });
}
