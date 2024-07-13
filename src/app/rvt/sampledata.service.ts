import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export interface Model {
  name: string;
  favNumber: number;
  dob: Date;
  email: string;
  admin: boolean;
  level: 1 | 2 | 3 | 4 | 5;
}

@Injectable({
  providedIn: 'root',
})
export class SampledataService {
  #data$ = new BehaviorSubject<Model>({
    name: 'Sander',
    favNumber: 30,
    dob: new Date('1990-01-01'),
    email: 'sander@noyb.eu',
    admin: true,
    level: 4,
  });

  /** get a fresh clone on each use */
  data$ = this.#data$.pipe(map(data => structuredClone(data)));

  save(data: Model) {
    this.#data$.next(data);
  }
}
