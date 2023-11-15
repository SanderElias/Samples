import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  firstValueFrom,
  map,
  mergeMap,
  Observable,
  pipe,
  shareReplay,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { AddressesService } from '../addresses.service';

const sampleRecord = {
  id: '1',
  type: 'contact',
  name: 'Luke Skywalker',
  number: 12,
  dateAdded: new Date(),
  phone: '+1 (555) 555-5555',
  email: 'luke@rd2.org',
  tags: ['starwars', 'jedi'],
};

const extractInputType = value => {
  const type: string = (value.constructor.name || 'unknown').toLowerCase();
  console.log(type);
  if (value === null || value === undefined) {
    return 'hidden';
  }
  if (type === 'string') {
    return 'text';
  }

  return type;
};

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-dyn-form',
  templateUrl: './dyn-form.component.html',
  styles: [],
})
export class DynFormComponent {
  @ViewChildren('myForm') formList: QueryList<NgForm>;
  person$ = new BehaviorSubject({} as any);
  fieldData$ = this.person$.pipe(
    map(person => Object.entries(person).map(([name, value]) => ({ name, value, type: extractInputType(value) }))),
    map(fields => fields.filter(field => field.type !== 'Array'))
  );

  addresses$ = this.adr.addresses$;

  vm$ = combineLatest({ person: this.person$, fields: this.fieldData$, addresses: this.addresses$ }).pipe(
    map(({ person, fields, addresses }) => ({ person, fields, addresses, names: Object.keys(addresses[0]) }))
  );

  constructor(private adr: AddressesService) {}

  ngAfterViewInit(): void {
    /** this is here to show you can subscribe to changes from template driven */
    this.formList.changes
      .pipe(
        startWith(undefined), // the first time it doesn't emit anything
        map(() => this.formList.first), // get the form
        filter(form => form !== undefined), // filter out when it's undefined
        switchMap(form => form.valueChanges), // get the value changes
        tap(vc => console.log('form value changed', vc))
      )
      .subscribe();

    this.adr.addresses$;
  }

  async openWith(id) {
    if (id) {
      const dialog = document.querySelector('dialog') as any;
      const list: any[] = await firstValueFrom(this.addresses$);
      const person = list.find(p => p.id === id);
      this.person$.next(person);
      dialog.showModal();
    }
  }
}
