import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';
import { Observable, ReplaySubject, Subject } from 'rxjs';

export {};

interface BinNode {
  value: any;
  left?: BinNode;
  right?: BinNode;
  [Symbol.iterator]: any;
}

function createNode(value) {
  const node = { value } as BinNode;
  node[Symbol.iterator] = function* () {
    yield node.value;
    if (node.left) {
      yield* node.left;
    }
    if (node.right) {
      yield* node.right;
    }
  };
  return node;
}

const root = createNode('root');
root.right = createNode('right-1');
root.left = createNode('left-1');
root.left.left = createNode('left-2');
root.right.left = createNode('branch left');
root.right.right = createNode('branch right');
root.right.left.left = createNode('leaf L1');
root.right.left.right = createNode('leaf L2');
root.right.right.left = createNode('leaf R1');


function keepState<T>(initialState?: Partial<T>): Generator<T> {
  function* intKeepState(initialState?: Partial<T>) {
    let internalState = initialState ?? ({} as Partial<T>);
    const updateState = (newState: Partial<T>) => (internalState = { ...internalState, ...newState });
    while (true) {
      const newState = yield internalState as T;
      if (typeof newState === 'object') {
        updateState(newState);
      }
    }
  }
  const state = intKeepState(initialState);
  state.next();
  return state as Generator<T>;
}

const state = keepState({
  a: 10,
  b: 'user',
  c: false,
  d: 0,
});

console.log(state.next({ d: 7 }).value);

const currentState = state.next().value;
// console.dir(currentState);

const logDeco = (preString = 'logDeco') => {
  return <T, K extends keyof T>(target: T, name: K) => {
    const privateProp = `#${String(name)}_subject`;
    const desc: PropertyDescriptor = {
      get(this: T): Observable<T[K]> {
        console.log(`getting ${String(name)}`);
        this[privateProp] = this[privateProp] ?? new ReplaySubject<T[K]>(1);
        return this[privateProp];
      },
      set(this: T, value: T[K]) {
        this[privateProp] = this[privateProp] ?? new ReplaySubject<T[K]>(1);
        // console.log(`setting ${String(name)} to ${value}`)
        this[privateProp].next(value);
      },
      configurable: false,
      enumerable: true,
    };
    Object.defineProperty(target, name, desc);
  };
};

class demo {
  @logDeco()
  name = 'Sander';
}

const t = new demo();
t.name.subscribe(r => console.log(r));
//

setTimeout(() => (t.name = 'Elias'), 250);

/** */
// et root provider somehow?
