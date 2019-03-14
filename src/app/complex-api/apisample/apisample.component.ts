import { Component, OnInit } from '@angular/core';
import { SwapiService } from '@se-ng/swapi';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, tap } from 'rxjs/operators';
ng
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
