import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pluck } from 'rxjs/operators';
import { DemoUserService } from '../../../../src/app/demo-users.service';
import { modelFromLatest } from '../../../../projects/se-ng/observable-utils/src/lib/modelFromLatest';
import { createSetStateMethod } from '../../../../projects/se-ng/observable-utils/src/lib/setStateMethodCreator';

@Component({
  selector: 'app-demo-user',
  templateUrl: './demo-user.component.html',
  styles: []
})
export class DemoUserComponent implements OnInit {
  state$ = new BehaviorSubject({
    searchText: ''
  });
  users$ = this.us.allUsers$;
  userCount$ = this.users$.pipe(map(userList => userList.length));
  setState = createSetStateMethod(this.state$);

  foundUsers$ = combineLatest(
    this.users$,
    this.state$.pipe(
      pluck('searchText'),
      distinctUntilChanged(),
      debounceTime(250)
    )
  ).pipe(
    map(([users, search]) =>
      users
        .filter(row =>
          row.username.toLowerCase().includes(search.toLowerCase())
        )
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

  constructor(private us: DemoUserService) {}

  ngOnInit() {}
}
