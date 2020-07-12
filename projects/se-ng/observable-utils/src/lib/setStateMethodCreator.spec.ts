import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { createSetStateMethod } from './setStateMethodCreator';

describe('createSetStateMethod', () => {
  interface State {
    testRuns: number;
    dummy?: true;
  }

  /** create an state observable with an existing state. */
  const state$ = new ReplaySubject<State>(1);
  /** put in the initial state. */
  state$.next({
    testRuns: 0,
  });

  it('it should return a function', () => {
    const setState = createSetStateMethod(state$);
    expect(setState).toBeInstanceOf(Function);
  });

  it('it should update the state in the state$ observable', async () => {
    /** create a promise to catch the second result (first is initial state!) */
    const prom = state$.pipe(take(2)).toPromise();
    const setState = createSetStateMethod(state$);
    setState('testRuns', 1);
    const result = await prom;
    expect(result).toBeInstanceOf(Object);
    expect(result.testRuns).toBe(1);
  });
});
