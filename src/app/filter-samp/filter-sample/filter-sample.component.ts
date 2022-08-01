import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, tap } from 'rxjs/operators';
import { AddressService, UserCard } from '../../generic-services/address.service';

type Vm = [UserCard[], string];

@Component({
  selector: 'app-filter-sample',
  templateUrl: './filter-sample.component.html',
  styles: [],
})
export class FilterSampleComponent implements OnInit {
  nameFilter = new UntypedFormControl('');

  filter$ = this.nameFilter.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    startWith(''),
    map((name: string) => name.trim().toLocaleLowerCase())
  );

  users$ = this.us.userCards$;

  vm$ = combineLatest([this.users$, this.filter$]).pipe(
    map(([users, filterStr]: Vm) => ({
      users: users.filter(row =>
        filterStr ? row.name.toLocaleLowerCase().includes(filterStr) : true
      ),
    }))
  );

  constructor(private us: AddressService) {}

  ngOnInit() {}
}
