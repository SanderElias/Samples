import { Component, inject,OnInit } from '@angular/core';
import { SeLetDirective } from '@se-ng/let';
import { timer } from 'rxjs';
import { map, shareReplay,tap } from 'rxjs/operators';

import { PokeApiService } from '../poke-api.service';

@Component({
    selector: 'app-pokemain',
    templateUrl: './pokemain.component.html',
    styles: [],
    imports: [SeLetDirective]
})
export class PokeMainComponent implements OnInit {
  private pa = inject(PokeApiService);

  fakePost$ = timer(1500).pipe(
    tap(() => console.log('done')),
    map(() => 'hello world'),
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  ngOnInit() {
    console.log('pokeMain');
    // this.pa.init();
  }
}
