# Observable-Utils

My observable helpers.

# ModelFromLatest

A easy way to create a observable model. It replaces `combineLatest([a,b]).map(([a,b])=>({a,b}))`
It removes the duplications from that, and makes sure typing flow correctly.

# createGetStateMethod and createSetStateMethod

Helper functions for setting properties inside an replay/behaviour subject in a component.

```typescript
export class DemoComponent  {
  state$ = new BehaviorSubject({
    searchText: '',
    counter: 0
  });
  setState = createSetStateMethod(this.state$);
  getState = createGetStateMethod(this.state$)

  async modifyCounterWith(delta:number) {
    const oldval = this.getStat('counter')
    setState('counter', oldVal+delta)
  }
```

