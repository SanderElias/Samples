import { Component, OnInit } from '@angular/core';
import { modelFromLatest } from '@se-ng/observable-utils';
import { BehaviorSubject, interval, Subject } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { DemoUser, DemoUserService } from 'src/app/demo-users.service';

interface LocalState {
  position: number;
  pageSize: number;
  search: string;
}

@Component({
  selector: 'app-big-data',
  template: `
    <h1>Selected users</h1>
    <section *ngIf="vm$ | async as vm">
      Available users:{{ vm.users.length }} (Loading done:{{ vm.done }}%)<br />
      <label>Search <input (input)="setSearch($event)" /></label>
      <button (click)="sortOn('username')">username</button>
      <button (click)="sortOn('email')">email</button>
      <div id="scroll">
        <input
          type="range"
          [max]="vm.users.length / vm.state.pageSize"
          (input)="setPos($event)"
        />
        <table>
          <tbody>
            <tr *ngFor="let user of vm.page">
              <td>{{ user.id }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <style>
      #scroll {
        display:grid;
        grid-template-columns: 40px 1fr;
      }
      #scroll > input {
        transform: translateY(-100%) rotate(90deg); /** rotate  */
        transform-origin: left bottom;
        width: 20rem; /** 20 lines should be the same as 20rem unless there are css shenanigans  */
        height:40px; /** ballpark guess :-D */
      }

    </style>
  `,
})
export class BigDataComponent implements OnInit {
  init$ = new Subject<void>();
  users$ = this.user.allUsers$;
  state$ = new BehaviorSubject<LocalState>({
    pageSize: 20,
    position: 0,
    search: '',
  });
  // keep loading in new users.
  doneLoadingPer$ = interval(400).pipe(
    take(200),
    tap(() => this.user.addUsers(2500)),
    map(n => Math.ceil((n / 200) * 100))
  );
  curPage$ = this.init$.pipe(
    switchMap(() => this.state$),
    tap(n => console.log(n)),
    distinctUntilChanged(),
    mergeMap(state => this.users$.pipe(map(users => this.findFirst(users, state))))
  );

  vm$ = modelFromLatest({
    users: this.users$,
    state: this.state$,
    page: this.curPage$,
    done: this.doneLoadingPer$,
  });
  // .pipe(tap(s => console.log(s)));

  constructor(private user: DemoUserService) {}

  findFirst(users: DemoUser[], { position, pageSize, search }): DemoUser[] {
    if (!search) {
      return users.slice(position * pageSize, position * pageSize + pageSize);
    }
    let n = 0;
    const foundUsers = [] as DemoUser[];
    while (n < users.length && foundUsers.length < pageSize) {
      if (users[n].username.toLowerCase().includes(search.toLowerCase())) {
        foundUsers.push(users[n]);
      }
      n += 1;
    }
    return foundUsers;
  }

  setPos(ev) {
    const el = ev.target as HTMLInputElement;
    const position = el.valueAsNumber;
    this.state$.next({ ...this.state$.value, position });
  }
  setSearch(ev) {
    const el = ev.target as HTMLInputElement;
    const search = el.value;
    console.log({ search });
    this.state$.next({ ...this.state$.value, search });
  }

  ngOnInit(): void {
    console.log('init');
    setTimeout(() => {
      this.init$.next();
      this.init$.complete();
    });
  }
}
