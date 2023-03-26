import { signal, effect, computed, Signal } from './signals/index.js'

const tick = () => new Promise(resolve => setTimeout(resolve, 100))
const simple = signal(0);
const simple2 = signal({a:1});

const sum = computed(() => simple() + simple2().a)

effect(() => {
  console.log(sum())
})

simple.set(1)
await tick()
simple.set(2)
await tick()
simple.set(3)
simple2.mutate(m => m.a=6)

// await tick()
// simple.set(4)



