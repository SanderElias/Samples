import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { createGetStateMethod } from './getStateMethodCreator';

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
    const getState = createGetStateMethod(state$);
    expect(getState).toBeInstanceOf(Function);
  });

  it('it should return a promise with the content of the state', async () => {
    /** create a promise to catch the second result (first is initial state!) */
    const getState = createGetStateMethod(state$);
    const result = await getState('testRuns');
    expect(typeof result).toBe('number');
    expect(result).toBe(0);
  });
});
