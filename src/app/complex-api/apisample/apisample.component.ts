import { AfterViewInit, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SwapiRoot, SwapiService } from '@se-ng/swapi';

import { combineLatest, of } from 'rxjs';
import {
  catchError,
  concatMap,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'app-apisample',
  templateUrl: './apisample.component.html',
  styles: []
})
export class APISampleComponent implements AfterViewInit {
  chosenSet = new FormControl('');
  name = new FormControl('');
  rawData: any;

  availableSets$ = this.sw.swapiRoot$.pipe(
    map(root => (Object.keys(root) as unknown) as (keyof SwapiRoot)[])
  );

  result$ = combineLatest(
    this.chosenSet.valueChanges,
    this.name.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      filter(Boolean)
    )
  ).pipe(
    switchMap(([setname, name]) => this.sw.findIn(setname, name)),
    filter(Boolean),
    tap(rawData => (this.rawData = rawData)),
    concatMap(rawData => this.sw.enrich(rawData)),
    catchError(e => {
      console.error(e);
      return of({
        'Not Found': `Your search string didn't return any results`
      });
    })
  );

  constructor(private sw: SwapiService) {}

  ngAfterViewInit() {
    /** put in defaults to get the thing going */
    this.changeTo(['people', 'luke']);
  }

  async changeTo(event) {
    const availableSets = await this.availableSets$.toPromise();
    const [property, findValue] = event;
    let chosenSet = property;
    if (!availableSets.includes(property)) {
      const orgval = this.rawData[property];
      chosenSet = this.sw.detectSet(Array.isArray(orgval) ? orgval[0] : orgval);
    }
    console.log(chosenSet, findValue);
    this.chosenSet.setValue(chosenSet, { emitEvent: true });
    this.name.setValue(findValue, { emitEvent: true });
  }
}
