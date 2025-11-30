import { AsyncPipe } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createSetStateMethod, modelFromLatest } from '@se-ng/observable-utils';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pluck, tap } from 'rxjs/operators';

import { DemoUserService } from '../../../../src/app/demo-users.service';

@Component({
  selector: 'app-demo-user',
  templateUrl: './demo-user.component.html',
  styles: [],
  standalone: true,
  imports: [AsyncPipe]
})
export class DemoUserComponent implements OnInit {
  private us = inject(DemoUserService);
  private route = inject(ActivatedRoute);

  state$ = new BehaviorSubject({
    searchText: ''
  });
  users$ = this.us.allUsers$;
  userCount$ = this.users$.pipe(map(userList => userList.length));
  setState = createSetStateMethod(this.state$);

  foundUsers$ = modelFromLatest({
    users: this.users$,
    search: this.state$.pipe(pluck('searchText'), distinctUntilChanged(), debounceTime(250))
  }).pipe(
    map(({ users, search }) =>
      users
        .filter(row => row.username.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => (a.username < b.username ? -1 : 1))
    )
  );

  searchCount$ = this.foundUsers$.pipe(map(u => u.length));

  viewModel$ = modelFromLatest({
    foundUsers: this.foundUsers$.pipe(map(u => u.slice(0, 25))),
    state: this.state$,
    total: this.userCount$,
    found: this.searchCount$,
    pages: this.searchCount$.pipe(map(n => Math.ceil(n / 25)))
  });

  ngOnInit() {
    this.route.params
      .pipe(
        pluck('id'),
        tap(p => console.log('params', p))
      )
      .subscribe();
  }
}
