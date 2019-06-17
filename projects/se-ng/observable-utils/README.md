# Observable-Utils

My observable helpers.

## ModelFromLatest

A easy way to create a observable model. It replaces `combineLatest([a,b]).map(([a,b])=>({a,b}))`
It removes the duplications from that, and makes sure typing flow correctly.

```typescript
const invoice$ = modelFromLatest<testModel>({
  customer: customer$,
  invoiceHeader: ivh$,
  invoiceLines: ivh$.pipe(switchmap(ivh => this.loadLines(ivh.id)))
});
```

## createGetStateMethod and createSetStateMethod

Helper functions for setting properties inside an replay/behavior subject in a component.

```typescript
export class DemoComponent  {
  state$ = new BehaviorSubject({
    searchText: '',
    counter: 0
  });
  setState = createSetStateMethod(this.state$);
  getState = createGetStateMethod(this.state$)

  async modifyCounterWith(delta:number) {
    const oldval = this.getState('counter')
    this.setState('counter', oldVal+delta)
  }
```

### setState

The setState method that is created on the class is fully typed. It takes 2 kind of parameters.

1. `this.setState('propname',newValue)` where propname is a string, typechecked to exist in the state$, and newValue is a new value for that property, that is also typechecked against the state$
2. `this.setState({prop1:val, prop2:val})` where it takes an object, that must be a partial of state\$, and is typechecked for that.

### getState

The getState method that is created on the class. It takes 0 to 1 parameter:

1. `this.getState()`without parameter, will return a promise with the full content of the state\$
2. `this.getState('propname')` the propname is a string that must exist (and is type checked), returns a promise with the properties value out of state\$
3. `this.getState(['propname1','propname2'])`will return a promsise with a partial out of state\$,
