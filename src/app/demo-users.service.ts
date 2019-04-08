import { Injectable } from '@angular/core';
import { Chance } from 'chance';
import { merge, of, Subject, timer } from 'rxjs';
import {
  first,
  map,
  mergeMap,
  shareReplay,
  take,
  tap,
  debounceTime,
  throttleTime
} from 'rxjs/operators';
import { modelFromLatest } from '../../src/utils/modelFromLatest';

const change = new Chance();

enum UserState {
  isNew,
  isAccepted,
  isActive
}

export interface DemoUser {
  id: number;
  username: string;
  password?: string;
  email: string;
  isActive: boolean;
  isAdmin: boolean;
  userState: UserState;
}

/**
 * A sample service that showcases how you can use observables in an effective way
 */
@Injectable({
  providedIn: 'root'
})
export class DemoUserService {
  /** subject to init && be able to flush the cache */
  private flush$ = new Subject<void>();
  /** an subject that allows us to update uses in memory */
  private updatedUsers$ = new Subject<DemoUser[]>();

  /** get the initial users from the network, and then merge in the updates */
  allUsers$ = this.flush$.pipe(
    // use switchMap to replace the 'flush' with an http.xxx
    mergeMap(() => merge(of([] as DemoUser[]), this.updatedUsers$)),
    // use shareReplay to 'cache' the data. (note: only when you need an cache!)
    shareReplay({ bufferSize: 1, refCount: false })
  );

  /**  as the allUsers$ is cached, I don't need to do that here. unless it's an really big list */
  admins$ = this.allUsers$.pipe(
    map(userList => userList.filter(row => row.isAdmin))
  );
  /** the same for normal users */
  users$ = this.allUsers$.pipe(
    map(userList => userList.filter(row => !row.isAdmin))
  );

  /** the conconstructor */
  constructor() {
    this.flushCache();
  }

  async addUsers(newUserCount) {
    const users = await this.allUsers$.pipe(first()).toPromise();
    const base = users.length;
    // users.reduce((min, line) => (min = Math.max(min, line.id)), 0) + 1;
    const newUsers = Array.from({ length: newUserCount }, (e, i) => ({
      id: base + i,
      ...fakeUser()
    }));
    this.updatedUsers$.next(users.concat(newUsers));
  }

  /** async helper to 'save' users. async makes it easier to read if we wait on the suer promise */
  async saveUser(user: DemoUser) {
    /** get a current list of users out of the 'cache'*/
    const users = await this.allUsers$.pipe(take(1)).toPromise();
    const index = users.findIndex(row => row.id === user.id);
    if (index > -1) {
      /** update the found user */
      Object.assign(users[index], user);
    } else {
      // create a new id
      let id;
      while (!id || users.findIndex(row => row.id === id) > -1) {
        /** create an random id and check if its used */
        id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      }
      /** add it to th array of users.  */

      users.unshift({ ...user, id });
      /** unshift puts it at the top */
    }
    /** in a non-sample function you are probably also saving stuff to the server! */
    this.updatedUsers$.next(users);
  }

  /** helper to 'delete' a user  */
  async deleteUser(user: DemoUser) {
    /** get a list of users with the chosen one filtered out */
    const users = (await this.allUsers$.pipe(first()).toPromise()).filter(
      row => row.id !== user.id
    );
    /** in a non-sample function you are probably also saving stuff to the server! */
    this.updatedUsers$.next(users);
  }

  /** call this to flush out the captured data in this service */
  async flushCache() {
    /** push it into the next frame */
    await new Promise(r => setTimeout(r));
    this.flush$.next();
    timer(0, 250)
      .pipe(
        tap(() => this.addUsers(1000)),
        take(200)
      )
      .subscribe();
  }
}

function fakeUser() {
  return <DemoUser>{
    userState: change.integer({ min: 0, max: 3 }),
    username: change.name(),
    isAdmin: change.bool(),
    isActive: change.bool(),
    email: change.email()
  };
}

// console.log('start');
// const u = new DemoUserService();

// // u.allUsers$.subscribe(u => console.log(u.length));
// modelFromLatest({
//   all: u.allUsers$,
//   admin: u.admins$,
//   user: u.users$
// })
//   .pipe(
//     throttleTime(1000),
//     tap(
//       r => console.log(r.all.length, r.user.length, r.admin.length),
//       e => console.log(e)
//     )
//   )
//   .subscribe();
