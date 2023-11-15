// a stack of running effects with a root no-op function
// to simplify the rest of the logic without needing to
// worry about no-op executions
/** @type {function[]} */
const effects = [Function.prototype];

// a weakly related list of effects that cannot be freed
// until signals that registered these effects are updated
const disposed = new WeakSet();

// the basic class that wraps values and provides helpers
class Signal {
  // PRIVATE FIELDS
  /** @type {T} */ #value;
  /** @type {Set} */ #effects = new Set<Function>();

  /** @param {T} value the value carried through the signal */
  constructor(value) {
    this.#value = value;
  }

  // SIGNAL R/W SIDE EFFECT LOGIC
  /** @returns {T} */
  get value() {
    // add (once) whatever effect is currently running
    // no effects means add (once) the root no-op
    this.#effects.add(effects.at(-1));
    // return the wrapped value
    return this.#value;
  }

  /** @param {T} value the new value carried through the signal */
  set value(value) {
    // trigger effects only when a new value to wrap is passed along
    // which is usually the most desirable use-case to deal with
    if (this.#value !== value) {
      this.#value = value;
      // for all subscribed effects, including the no-op
      for (const effect of this.#effects) {
        effect();
      }
    }
  }

  // EXPLICIT NO SIDE EFFECTS
  // used to *not* subscribe effects (avoid seppuku)
  peek() {
    return this.#value;
  }

  // IMPLICIT SIDE EFFECTS
  // there could be more but these are handy for
  // automatic string conversion (DOM attributes, text, etc)
  // or automatic numeric operations: symbol(1) + symbol(2)
  toString() {
    return String(this.value);
  }
  valueOf() {
    return this.value;
  }
}

/** @param {T} value the value carried through the new Signal */
const signal = value => new Signal(value);

/**
 * @param {function():void} fn the callback to invoke as effect
 * @returns {function():void} a callback to dispose the effect
 */
const effect = fn => {
  // add the callback to the stack
  effects.push(fn);
  try {
    // execute it and return a way to dispose it
    fn();
    return () => {
      disposed.add(fn);
    };
  } finally {
    // no matter what, free the stack once the fn has been executed
    // propagating possible errors through the program but not messing up
    // the whole stack of callbacks
    effects.pop();
  }
};

const single = signal(1);
const double = signal(10);
const triple = signal(100);

const dispose1 = effect(() => {
  console.log(`
  #1 effect
    single: ${single}
    double: ${double}
  `);
});

const dispose2 = effect(() => {
  console.log(`
  #2 effect
    double: ${double}
    triple: ${triple}
  `);
});

++double.value;
double.value += 4;
// logs single 1, double 11
// logs double 11, triple 100

dispose2();

++double.value;
// logs single 1, double 11
