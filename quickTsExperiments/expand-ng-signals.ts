import { computed, effect, Signal, signal } from './signals/index.js';
import { Observable } from 'rxjs';

const a = signal(1);
const result = computed(() => a() * a());

// log the result of the computation
effect(() => console.log('a', a(), result()));

/**
 * sample of effect, simulating stuff that _will_ happen in apps if not prevented.
 * I know this is so obvioous none is going to do it like this.
 * But effects will call other functions/methods that will call other functions/methods, etc.
 * at that point this might be way more hidden. And if there is no _asycn_ in the mix, the app will just freeze.
 */
effect(() => {
  if (result() % 10 === 0) {
    a.set(a() - 4);
  } else {
    /** using setTimeout to prevent 100% loop inside of 1 cycle */
    setTimeout(() => a.set(a() + 2), 500);
  }
});

a.set(3);
