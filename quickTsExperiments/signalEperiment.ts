const effects = [Function.prototype]
const dispose_symbol = Symbol('dp')

class mySignal<T>  {
  #value: T
  #effects = new Set<Function>()
  #deferred = new Deferred<T>()

  constructor(initialValue: T) {
    this.#value = initialValue
  }
  get value() {
    // add the currently running effect to the list
    const currentEffect = effects.at(-1)!
    if (!this.#effects.has(currentEffect)) {
      currentEffect[dispose_symbol] = currentEffect[dispose_symbol] || new Set<Function>()
      currentEffect[dispose_symbol].add(() => this.#effects.delete(currentEffect))
      this.#effects.add(currentEffect)
    }
    return this.#value
  }
  set value(newValue: T) {
    if (this.#value !== newValue) {
      this.#value = newValue
      for (const effect of this.#effects) {
        // run all effects in list
        effect()
      }
      this.#deferred.resolve(newValue)
    }
  }
  [Symbol.asyncIterator] =  async function* () {
      while (true) {
        const value =await this.#deferred.promise
        this.#deferred = new Deferred<T>()
        console.log('yielding', value)
        yield value
      }
    }
  // [Symbol.toPrimitive] = () => this.value
  toString() { return String(this.value) }
  valueOf() { return this.value }
}

const signal = <T>(initialValue: T) => new mySignal(initialValue)

const effect = (fn: Function) => {
  // add the callback to the stack
  effects.push(fn)
  try {
    // run the callback
    fn()
  }
  finally {
    // remove the callback from the stack
    effects.pop()
    // return a cleanup function that disposes of the effect from all of it signals
    return () => [...fn[dispose_symbol]].forEach(dispose => dispose())

  }
}

class Deferred<T> {
  #resolve: (value: T | PromiseLike<T>) => void
  #reject: (reason?: any) => void
  readonly promise = new Promise<T>((resolve, reject) => {
    this.#resolve = resolve
    this.#reject = reject
  })
  get resolve() { return this.#resolve }
  get reject() { return this.#reject }
}

const computed = <T>(fn: () => T) => {
  const comp = signal<T>(undefined as unknown as T)
  const dispose = effect(() => comp.value = fn())
  comp[dispose_symbol] = dispose
  return comp
}

const one = signal(1)
const ten = signal(10)
const product = computed(() => one.value * ten.value)

const dispose = effect(() => console.log(one.value, ten.value, product.value))

const test = new Promise(async (resolve, reject) => {
  for await (const value of product) {
    console.log('ai',value)
  }
  resolve(1)
})

for (let i = 0; i < 10; i++) {
  // await new Promise(resolve => setTimeout(resolve, 1))
  one.value++
  ten.value -= 1;
  await new Promise(resolve => setTimeout(resolve, 1))
}

setTimeout(() => undefined, 1000)
export {}
