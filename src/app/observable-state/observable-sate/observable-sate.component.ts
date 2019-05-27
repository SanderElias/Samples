import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, concat, EMPTY, of } from 'rxjs';
import { catchError, debounceTime, take, tap } from 'rxjs/operators';
import { createGetStateMethod } from '../../../../projects/se-ng/observable-utils/src/lib/getStateMethodCreator';
import { createSetStateMethod } from '../../../../projects/se-ng/observable-utils/src/lib/setStateMethodCreator';
// tslint:disable: member-ordering

/** lets define everything we need */
interface LocalState {
  /** center part, the counter var */
  count: number;
  /** message to update the user of what's going on */
  msg: string;
  /** are we over the max value? */
  overMax: boolean;
  /** are we under the min value? */
  underMin: boolean;
  /** the maximum allowed value */
  max: number;
  /** the minimum that's allowed  */
  min: number;
}

@Component({
  selector: 'app-observable-sate',
  templateUrl: './observable-sate.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservableSateComponent implements OnInit {
  /**
   * The state subject
   * in this case I used an behavior subject because
   * I want to set defaults directly in my code here.
   */
  state$ = new BehaviorSubject<LocalState>({
    count: 5,
    msg: '',
    overMax: false,
    underMin: false,
    max: 10,
    min: 2
  });

  /**
   * helper to update the message, takes in the state.
   * (I'm not using a consequent style here, on purpose)
   */
  updateMessage = (state: LocalState) => {
    const msg = state.overMax ? 'to high!' : state.underMin ? 'to low!' : '';
    this.setState('msg', msg);
  };

  /** create a viewModel to use in the template */
  viewModel$ = this.state$.pipe(
    debounceTime(5), // <== don't refire on "sync" state changes.
    /** use side-effect to check the state */
    tap(state => this.checkState(state)),
    /** another side effect to update the messgage */
    tap(this.updateMessage)
  );

  result$ = concat(
    this.http.get('/assets/a.json').pipe(catchError(e => EMPTY)),
    this.http.get('/assets/b.json').pipe(catchError(e => EMPTY)),
    this.http.get('/assets/c.json').pipe(catchError(e => EMPTY)),
    of('No result found')
  ).pipe(take(1));

  /** set up my helpers */
  setState = createSetStateMethod(this.state$);
  getState = createGetStateMethod(this.state$);

  constructor(private http: HttpClient) {}

  /**
   * I need multiple things form the state here,
   * so, here I'm using destructuring on the complete state
   */
  async checkState(state: LocalState) {
    const { count, min, max, overMax, underMin } = state;
    /** use my helper to update the state */
    if (count > max !== overMax) {
      this.setState('overMax', count > max);
    }
    /** multiple times in a row */
    if (count < min !== underMin) {
      this.setState('underMin', count < min);
    }
  }

  /**
   * Sample method that does processing
   * this is a silly example, in a real world app, there is usually more processing
   */
  async up() {
    /** use the helper to get the count */
    const count = await this.getState('count');
    /** use the other helper to update the count */
    this.setState('count', count + 1);
  }

  async down() {
    const count = await this.getState('count');
    this.setState('count', count - 1);
  }

  ngOnInit() {}
}
