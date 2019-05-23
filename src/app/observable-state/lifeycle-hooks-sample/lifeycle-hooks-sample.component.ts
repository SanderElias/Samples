import {Component, OnInit} from '@angular/core';
import {SwapiService, SpaceShip} from '@se-ng/swapi';
import {seOnInit, seOnDestroy} from '@se-ng/observable-hooks';
import {switchMap, shareReplay, map, startWith, tap} from 'rxjs/operators';
import {modelFromLatest} from '../../../../src/utils/modelFromLatest';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lifeycle-hooks-sample',
  templateUrl: './lifeycle-hooks-sample.component.html',
  styles: []
})
export class LifeycleHooksSampleComponent extends seOnInit(seOnDestroy()) {
  search = new FormControl();
  searchText$: Observable<string> = this.search.valueChanges.pipe(startWith(''));

  starships$: Observable<SpaceShip[]> = this.seOnInit$.pipe(
    switchMap(() => this.swapi.getAllRows('starships')),
    shareReplay({refCount: true, bufferSize: 1})
  );

  filteredShips$ = modelFromLatest({ships: this.starships$, s: this.searchText$}).pipe(
    map(data => data.ships.filter(row => row.name.includes(data.s))),
    tap(ships => console.log(ships))
  );

  viewModel$ = modelFromLatest({
    allShips: this.starships$,
    result: this.filteredShips$,
    search: this.searchText$
  });

  constructor(private swapi: SwapiService) {
    super();
  }

}
