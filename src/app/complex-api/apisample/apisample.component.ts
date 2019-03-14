import { Component, OnInit } from '@angular/core';
import { SwapiService, SwapiRoot } from '@se-ng/swapi';
import {
  tap,
  map,
  concatMap,
  toArray,
  catchError,
  concatAll,
  reduce,
  switchMap
} from 'rxjs/operators';
import { from, empty, EMPTY } from 'rxjs';

@Component({
  selector: 'app-apisample',
  templateUrl: './apisample.component.html',
  styles: []
})
export class APISampleComponent implements OnInit {
  person$ = this.sw.findWithName('luke').pipe(
    concatMap(r => this.sw.enrich(r)),
    tap(r => console.log('p', r)),
    catchError(e => (console.log('error', e), EMPTY))
  );

  constructor(private sw: SwapiService) {}

  ngOnInit() {
    this.person$.subscribe();
  }
}
