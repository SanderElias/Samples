import {
  combineLatest,
  firstValueFrom,
  isObservable,
  map,
  of,
  tap
} from "./chunk-LHOZ36SL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// dist/se-ng/observable-utils/fesm2022/se-ng-observable-utils.mjs
function createGetStateMethod(state$) {
  async function getState(prop) {
    const state = await firstValueFrom(state$);
    if (prop) {
      if (Array.isArray(prop)) {
        return prop.reduce((result, prop2) => __spreadProps(__spreadValues({}, result), { [prop2]: state[prop2] }), {});
      }
      return state[prop];
    }
    return state;
  }
  return getState;
}
function createSetStateMethod(stateSubject) {
  function setState(prop, newValue) {
    return firstValueFrom(stateSubject.pipe(
      map((currentState) => {
        if (typeof prop === "string") {
          return __spreadProps(__spreadValues({}, currentState), { [prop]: newValue });
        }
        if (typeof prop === "object") {
          return __spreadValues(__spreadValues({}, currentState), prop);
        }
        throw new Error("Property needs to be a string or an object");
      }),
      // insert the state.
      tap((newState) => stateSubject.next(newState))
      // push the update to the view.
    ));
  }
  return setState;
}
function modelFromLatest(modelBase) {
  const sources = Object.values(modelBase).map((val) => isObservable(val) ? val : of(val));
  return combineLatest(sources).pipe(map((values) => (
    /** user reduce to reassemble the original structure, but then with the data */
    Object.keys(modelBase).reduce(
      (vm, key, i) => {
        vm[key] = values[i];
        return vm;
      },
      /** make sure it conforms to given types. */
      {}
    )
  )));
}

export {
  createGetStateMethod,
  createSetStateMethod,
  modelFromLatest
};
