import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { seOnDestroy, seOnInit } from '@se-ng/observable-hooks';
import { modelFromLatest } from '@se-ng/observable-utils';
import { SpaceShip, SwapiService } from '@se-ng/swapi';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';

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
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  filteredShips$ = modelFromLatest({ ships: this.starships$, s: this.searchText$ }).pipe(
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

// @Component({})
// export class SomeLifeCycleHooksSampleComponent extends seOnInit(seOnDestroy()) {
//   /** collect startships on init. */
//   starShips$: Observable<SpaceShip[]> = this.seOnInit$.pipe(
//     switchMap(() => this.swapi.getAllRows('starships')),
//     shareReplay({refCount: true, bufferSize: 1})
//   );

//   starShipSub = this.starShips$.subscribe(data => console.table(data));

//   constructor(private swapi: SwapiService) {
//     super();

//     /** yes this is safe to do in but, don't subscribe in a controller! */
//     this.seOnDestroy$.subscribe(() => {
//       console.log('cleaning up house');
//       this.starShipSub.unsubscribe();
//     });
//   }
// }
