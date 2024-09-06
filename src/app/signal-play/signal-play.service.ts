import { computed, inject, Injectable } from '@angular/core';
import { asyncComputed } from 'projects/se-ng/signal-utils/src/async-computed';

import {DemoUserService } from '../demo-users.service';

@Injectable({
  providedIn: 'root',
})
export class SignalPlayService {
  users = inject(DemoUserService);


  $users = asyncComputed(() => this.users.allUsers$,[]);
  // $users = signal<DemoUser[]>([])

  getUser = (n: string) => {
    const users = this.$users();
    return users?.find(user => user.id === n);
  };

  getRelative = (id: string, offset = 1) => {
    const users = this.$users() || [];
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
      return users[0]?.id; // not found, return first id
    }
    if (userIndex + offset <= 0 || userIndex + offset >= users.length) {
      return id; // first or last  id already
    }
    return users[userIndex + offset].id;
  };

  $lastId = computed(() => {
    const users = this.$users();
    return (users && users.length > 0) ? users.at(-1)!.id : -2;
  });

  constructor() {}
}
