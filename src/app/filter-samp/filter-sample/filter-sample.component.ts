import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormControl, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, tap } from 'rxjs/operators';
import { AddressService, UserCard } from '../../generic-services/address.service';
import { NgIf, NgForOf, AsyncPipe } from '@angular/common';

type Vm = [UserCard[], string];

@Component({
    selector: 'app-filter-sample',
    templateUrl: './filter-sample.component.html',
    styles: [],
    standalone: true,
    imports: [NgIf, ɵInternalFormsSharedModule, ReactiveFormsModule, NgForOf, AsyncPipe]
})

export class FilterSampleComponent {
  private us = inject(AddressService);

  /** ⚠️⚠️⚠️ Injections above this comment ⚠️⚠️⚠️ */

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

}
