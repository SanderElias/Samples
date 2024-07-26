import { Component, OnInit, inject } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { timeInterval, tap, map, shareReplay } from 'rxjs/operators';
import { timer } from 'rxjs';
import { SeLetDirective } from '@se-ng/let';

@Component({
  selector: 'app-pokemain',
  templateUrl: './pokemain.component.html',
  styles: [],
  standalone: true,
  imports: [SeLetDirective],
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
