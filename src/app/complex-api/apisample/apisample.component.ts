import { Component, OnInit } from '@angular/core';
import { SwapiService, SwapiRoot } from '@se-ng/swapi';
import { tap, map, concatMap, toArray } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-apisample',
  templateUrl: './apisample.component.html',
  styles: []
})
export class APISampleComponent implements OnInit {
  person$ = this.sw.findWithName('luke').pipe(
    map(r => this.enrich(r)),
    tap(r => console.log('p', r)),
  );

  constructor(private sw: SwapiService) {}

  enrich(rec: { [key: string]: any }) {
    return from(this.sw.load<SwapiRoot>(this.sw.baseUrl)).pipe(
      concatMap(root =>
        /** check for key's that are in root */
        Object.keys(rec)
          .filter(prop => Object.keys(root).includes(prop))
          /** traverse every array in each key */
          .map(key =>
            from(rec[key]).pipe(
              toArray(),
              tap(url => console.log('key', url))
            )
          )
      ),
      tap(url => console.log('key', url))
    );
  }

  ngOnInit() {
    this.person$.subscribe();
  }
}
