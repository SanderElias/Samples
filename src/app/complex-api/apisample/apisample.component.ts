import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject, type Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SwapiRoot, SwapiService } from '@se-ng/swapi';
import { combineLatest, firstValueFrom, of } from 'rxjs';
import { catchError, concatMap, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { ShowRecComponent } from '../show-rec/show-rec.component';

@Component({
  selector: 'app-apisample',
  templateUrl: './apisample.component.html',
  styles: [],
  standalone: true,
  imports: [ReactiveFormsModule, ShowRecComponent, AsyncPipe, NgFor],
})
export class APISampleComponent {
  /** injections */
  #sw = inject(SwapiService);

  /** select the table/set */
  chosenSet = new FormControl('');
  /** search for this name */
  name = new FormControl('');
  /** keep the raw data */
  rawData: any;

  /** extract the available tabels/sets from the root of the api */
  availableSets$ = this.#sw.swapiRoot$.pipe(map(root => Object.keys(root)));
  availableSets = toSignal(this.availableSets$); // instead of async pipe

  /** the options (name or title) available in the picked set */
  availableOptions = toSignal(
    combineLatest([
      // combine the available sets with the chosen set
      this.availableSets$,
      this.chosenSet.valueChanges,
    ]).pipe(
      /** progress when the set exists */
      filter(([sets, chosen]) => sets.includes(chosen)),
      /** use the service to get the list */
      switchMap(([_, chosen]) => this.#sw.getSetNames(chosen as keyof SwapiRoot))
    ),
    { initialValue: [] }
  );

  /** combine all of the above into a resulting record for the view */
  // tslint:disable-next-line: deprecation
  result = toSignal(
    combineLatest([
      /** act on changes in the set/table */
      this.chosenSet.valueChanges,
      /** handle the search input */
      this.name.valueChanges.pipe(debounceTime(250), distinctUntilChanged(), filter(Boolean)),
    ]).pipe(
      /** load the raw data from the API */
      switchMap(([setname, name]: [any, string]) => this.#sw.findIn(setname, name)),
      /** don't let empty results in */
      filter(Boolean),
      /** use a side-effect to store the raw data */
      tap(rawData => (this.rawData = rawData)),
      /** parse the record, and load all child data */
      concatMap(rawData => this.#sw.enrich(rawData)),
      /** handle errors if something goes south */
      catchError(e => {
        console.error(e);
        return of({
          'Not Found': `Your search string didn't return any results`,
        });
      })
    )
  ) as unknown as Signal<{ [x: string]: unknown; name: string; url: string }>;

  ngAfterViewInit() {
    /** put in defaults to get the thing going */
    this.changeTo(['people', 'luke']);
  }

  async changeTo(event) {
    const availableSets = await firstValueFrom(this.availableSets$);
    const [property, findValue] = event;
    let chosenSet = property;
    /** don't do extra work if it's a known 'table/set' */
    if (!availableSets.includes(property)) {
      const orgval = this.rawData[property];
      chosenSet = this.#sw.detectSet(Array.isArray(orgval) ? orgval[0] : orgval);
    }
    // console.log(chosenSet, findValue);
    /** use the formControl observables to propangate the changes */
    this.chosenSet.setValue(chosenSet, { emitEvent: true });
    this.name.setValue(findValue, { emitEvent: true });
  }
}
