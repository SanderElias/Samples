import { Injectable } from '@angular/core';
import { first, map, mergeMap, shareReplay, startWith, Subject, take, tap, timer, firstValueFrom } from 'rxjs';
import { createUniqueId } from './util/random-things';

const chanceProm = import('chance')
  /** some trickery as the typings apparently don't match the reality */
  .then((m: any) => m)
  .then(({ default: Change }) => {
    return new Change();
  });

enum UserState {
  isNew,
  isAccepted,
  isActive,
}

export interface DemoUser {
  id: string;
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
  providedIn: 'root',
})
export class DemoUserService {
  /** subject to init && be able to flush the cache */
  private flush$ = new Subject<void>();
  /** an subject that allows us to update uses in memory */
  private updatedUsers$ = new Subject<DemoUser[]>();

  /** get the initial users from the network, and then merge in the updates */
  allUsers$ = this.flush$.pipe(
    // use switchMap to replace the 'flush' with an http.xxx
    mergeMap(() => this.updatedUsers$),
    startWith([] as DemoUser[]),
    // use shareReplay to 'cache' the data. (note: only when you need an cache!)
    shareReplay({ bufferSize: 1, refCount: false })
  );

  /**  as the allUsers$ is cached, I don't need to do that here. unless it's an really big list */
  admins$ = this.allUsers$.pipe(map(userList => userList.filter(row => row.isAdmin)));
  /** the same for normal users */
  users$ = this.allUsers$.pipe(map(userList => userList.filter(row => !row.isAdmin)));

  /** the coconstructor */
  constructor() {
    this.flushCache();
  }

  async addUsers(newUserCount) {
    const users = await firstValueFrom(this.allUsers$); //.pipe(first()).toPromise();
    const base = users.length;
    // users.reduce((min, line) => (min = Math.max(min, line.id)), 0) + 1;
    const newUsers = await Promise.all(
      Array.from({ length: newUserCount }).map(async (e, i) => ({
        ...(await fakeUser()),
        id: createUniqueId(),
      }))
    );

    this.updatedUsers$.next(users.concat(newUsers));
  }

  /** async helper to 'save' users. async makes it easier to read if we wait on the suer promise */
  async saveUser(user: DemoUser) {
    /** get a current list of users out of the 'cache'*/
    const users = await firstValueFrom(this.allUsers$);
    const index = users.findIndex(row => row.id === user.id);
    if (index > -1) {
      /** update the found user */
      Object.assign(users[index], user);
    } else {
      // create a new id
      let id = createUniqueId();
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
    const users = (await firstValueFrom(this.allUsers$)).filter(row => row.id !== user.id);
    /** in a non-sample function you are probably also saving stuff to the server! */
    this.updatedUsers$.next(users);
  }

  /** call this to flush out the captured data in this service */
  async flushCache() {
    const chance = await chanceProm;
    /** push it into the next frame */
    await new Promise(r => setTimeout(r));
    this.flush$.next();
    timer(0, 250)
      .pipe(
        tap(() => this.addUsers(chance.integer({ min: 100, max: 400 }))),
        take(20)
      )
      .subscribe();
  }
}

async function fakeUser() {
  const chance = await chanceProm;
  return <DemoUser>{
    userState: chance.integer({ min: 0, max: 3 }),
    username: chance.name(),
    isAdmin: chance.bool(),
    isActive: chance.bool(),
    email: chance.email(),
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
//     throttleTime(100),
//     tap(
//       r => console.log(r.all.length, r.user.length, r.admin.length),
//       e => console.log(e)
//     )
//   )
//   .subscribe();
