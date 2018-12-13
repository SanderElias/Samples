import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  tap
} from 'rxjs/operators';
import {
  AddressService,
  UserCard
} from 'src/app/generic-services/address.service';

interface Vm {
  users: UserCard[];
  name: string;
}

@Component({
  selector: 'app-filter-sample',
  templateUrl: './filter-sample.component.html',
  styles: []
})
export class FilterSampleComponent implements OnInit {
  nameFilter = new FormControl('');

  filter$ = this.nameFilter.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    startWith(''),
    map((name: string) => name.trim().toLocaleLowerCase())
  );

  users$ = this.us.userCards$;
  // .pipe(tap(users => console.log(users)));

  vm$ = combineLatest([this.users$, this.filter$]).pipe(
    map(([users, name]: [UserCard[], string]) => ({
      users: users.filter(row =>
        name ? row.name.toLocaleLowerCase().includes(name) : true
      )
    }))
  );

  constructor(private us: AddressService) {}

  ngOnInit() {}
}
