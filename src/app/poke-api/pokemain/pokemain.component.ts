import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { timeInterval, tap, map, shareReplay } from 'rxjs/operators';
import { timer } from 'rxjs';
import { SeLetDirective } from '@se-ng/let';

@Component({
  selector: 'app-pokemain',
  templateUrl: './pokemain.component.html',
  styles: [],
  standalone: true,
  imports: [SeLetDirective]
})
export class PokeMainComponent implements OnInit {
  fakePost$ = timer(1500).pipe(
    tap(() => console.log('done')),
    map(() => 'hello world'),
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  constructor(private pa: PokeApiService) {}

  ngOnInit() {
    console.log('pokeMain');
    // this.pa.init();
  }
}
