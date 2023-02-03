import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, interval } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { DemoUser, DemoUserService } from 'src/app/demo-users.service';

interface LocalState {
  position: number;
  pageSize: number;
  search: string;
  sort: keyof DemoUser | '';
}

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor],
  selector: 'app-big-data',
  template: `
    <h1>Big data and performance demo</h1>
    <!--
      use the VM$ and assign it to the vm view-variable,
      only show when the first complete set of results is there.
    -->
    <section *ngIf="vm$ | async as vm">
      <!-- show how many users are currently available, and how much e have done. -->
      Available users:{{ vm.users.length }} (Loading done:{{ vm.done }}%)<br />
      <!-- update the search property in the state when the user inputs something. -->
      <label>Search <input (input)="setProp('search', $event)" /></label>
      <div id="buttons">
        <!--
          set a value on a button so we can use that in the click handler.
          use a button to update the 'sort' state
        -->
        <button value="" (click)="setProp('sort', $event)">none</button>
        <button value="username" (click)="setProp('sort', $event)">username</button>
        <button value="email" (click)="setProp('sort', $event)">email</button>
        <button value="id" (click)="setProp('sort', $event)">id</button>
      </div>
      <div id="scroll">
        <!--
          Use a range-input to select the current page.
          using css, you are able to mimic a scroll-bar, I didn't went into this trouble for a demo.
          I'm using the state to set the max,
          and using the setProp again to update the position property in the state$
        -->
        <input
          type="range"
          [max]="vm.users.length / vm.state.pageSize"
          (input)="setProp('position', $event)"
        />
        <table>
          <tbody>
            <!--
              A simple ngFor to display the current page of users.
             -->
            <tr *ngFor="let user of vm.page">
              <td>{{ user.id }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <!-- I like my styling inlined. -->
    <style>
      /* use a bit of css to position the range upright, next to the table. I did choose before, but it can be after just as easily */
      #scroll {
        display: grid;
        grid-template-columns: 40px 1fr;
      }
      #buttons {
        display: grid;
        grid-template-columns: repeat(auto-fit, 154px);
      }
      #scroll > input {
        transform: translateY(-100%) rotate(90deg); /** rotate  */
        transform-origin: left bottom;
        width: 20rem; /** 20 lines should be the same as 20rem unless there are css shenanigans  */
        height: 40px; /** ballpark guess :-D */
      }
    </style>
  `,
})
export class BigDataComponent {
  /**
   * The local state I'm using. its in a behavior subject so I can pull anything I need when I need it.
   */
  state$ = new BehaviorSubject<LocalState>({
    pageSize: 20,
    position: 0,
    search: '',
    sort: '',
  });
  /**
   * The user list observable.
   */
  users$ = this.state$.pipe(
    /** only interested in the 'sort' state */
    map(results => results.sort),
    /** don't update unless the sort key is changed */
    distinctUntilChanged(),
    /** switch to the actual users */
    switchMap(sort =>
      /** use the observable allUsers that comes from the service. */
      this.user.allUsers$.pipe(
        /**
         * in here I'm sing the sort key (if there is one!) to sort my list
         * as the list is hot, and will grow, this is a bad idea, and will
         * block the stack. This is done here anyway to be able to show the impact of doing this
         */
        map(users => (sort === '' ? users : users.sort((a, b) => (a[sort] < b[sort] ? -1 : 1))))
      )
    )
  );

  /**
   * I want to know how much of the users i have done,
   * this observable will show the percentage of that.
   */
  doneLoadingPer$ = interval(100).pipe(
    /** using an interval of 100Ms a 1000 times means I'm loading for ~100 seconds  */
    take(1000),
    /** as a side effect I have my users-service generate 500 additional users, that will stream in. */
    tap(() => this.user.addUsers(500)),
    /** do the math on how much we have done as a percentage. */
    map(n => Math.ceil((n / 1000) * 100))
  );

  curPage$ = this.state$.pipe(
    /** user the entire state, and update when there is a change. */
    distinctUntilChanged(),
    /**
     * Merge in the state with the complete (or partial) user list.
     * the find users will take the state, and the users-list and return what needs to be displayed for this page.
     */
    mergeMap(state => this.users$.pipe(map(users => this.findFirst(users, state))))
  );

  /** wrap everything into a view model we can use in the view */
  vm$ = combineLatest({
    users: this.users$,
    state: this.state$,
    page: this.curPage$,
    done: this.doneLoadingPer$,
  });
  /** when in doubt, use console.log */
  // .pipe(tap(s => console.log(s)));

  constructor(private user: DemoUserService) { }

  /** utility method to extract the users I need to display. */
  findFirst(users: DemoUser[], { position, pageSize, search }): DemoUser[] {
    if (!search) {
      /** I'm not searching anything, so just use my current position, and the pagesize to return a "page" of users */
      return users.slice(position * pageSize, position * pageSize + pageSize);
    }
    /** ok, I do need to search. */
    let n = 0; // counter
    const foundUsers = [] as DemoUser[]; //result list
    /** iterate over the users array. bail out on end, OR when I have found a full page of users. */
    while (n < users.length && foundUsers.length < pageSize) {
      if (users[n].username.toLowerCase().includes(search.toLowerCase())) {
        /** Yep, found one, add to result set. */
        foundUsers.push(users[n]);
      }
      n += 1; // duh...
    }
    // return the resulting page of found users. (or less if its not a full page)
    return foundUsers;
  }

  /**
   * helper to set the local state$ from user events.
   * takes a property-name from the state, and an event.
   * In here I'm casting the event to `ev: { target: HTMLInputElement }` to make it easier to consume
   */
  setProp<T extends keyof LocalState>(prop: T, ev: { target: HTMLInputElement }) {
    /** extract the dom element from the event. */
    const domElement = ev.target;
    /** extract the current state from the behavior subject */
    const state = this.state$.value;
    /** should it be a number? */
    const isNum = typeof state[prop] === 'number';
    /** update the state with the updated values */
    this.state$.next({
      /** spread the current state, so we have the unchanged current state still in the next one. */
      ...state,
      /**
       * [prop] = use a computed property name to update the state we want to update, I used the TS type system to only allow existing props.
       * if it is supposed to be a number, read it as number from the input element otherwise user the string representation.
       */
      [prop]: isNum ? domElement.valueAsNumber : domElement.value,
    });
  }
}
