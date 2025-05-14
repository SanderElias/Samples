import { computed, effect, isSignal, Signal, signal } from '@angular/core';

class demo {
  s1 = signal(1);
  s2 = signal('a');
  s3 = signal(true);

  result = combine(this.s1, this.s2, this.s3);

  testObj = combineObject(this, this.s1, this.s2, this.s3);

  constructor() {
    effect(() => {
      const [v1, v2, v3] = this.result();
      const { s2 } = this.testObj();
    });
  }
}

function combine<P extends Signal<unknown>[]>(...signals: P) {
  return computed(() => signals.map(s => s()) as { [K in keyof P]: P[K] extends Signal<infer T> ? T : never });
}

function combineObject<O extends {}, P extends Signal<unknown>[]>(O: O, ...signals: P) {
  return computed(() => {
    const values = signals.map(s => s()) as { [K in keyof P]: P[K] extends Signal<infer T> ? T : never };
    const result = {} as { [K in keyof O]: (typeof values)[number] };
    Object.entries(O).forEach(([key, value]) => {
      if (!isSignal(value)) return;
      const index = signals.indexOf(value);
      if (index > -1) {
        result[key] = values[index];
      }
    });

    return result;
  });
}

type SimpleType<T> = T extends unknown
  ? {
      [K in keyof T]: T[K];
    }
  : never;
