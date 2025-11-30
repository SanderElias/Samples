import { Component, inject } from '@angular/core';

import { InMemDb } from './in-mem-db.service';

@Component({
  selector: 'se-in-mem-sample',
  imports: [],
  template: `
  <h1>In-Memory DB Sample</h1>
  <h2>Users</h2>
  <ul>
    @for (adminId of admins(); track adminId) {
      <li>{{ dbs.read(adminId)().name }} (ID: {{ adminId }})</li>
    }
  </ul>
  <h2>Admins</h2>
  <ul>
    @for (userId of users(); track userId) {
      <li>{{ dbs.read(userId)().name }} (ID: {{ userId }})</li>
    }
  </ul>

  `,
  styleUrl: './in-mem-sample.component.css',
})
export class InMemSampleComponent {
  dbs = inject(InMemDb);

  users = this.dbs.createIndex('users', (record) => record.name as string);
  admins = this.dbs.createIndex('admins', (record) => record.name as string);

  constructor() {
    this.dbs.create({ table: ['users'], name: 'Alice', age: 30 });
    this.dbs.create({ table: ['users', 'admins'], name: 'Bob', age: 25 });
    this.dbs.create({ table: ['users'], name: 'Charlie', age: 35 });
    this.dbs.create({ table: ['admins'], name: 'Dana', age: 28 });
    setTimeout(() => {
      this.dbs.create({ table: ['users', 'admins'], name: 'Eve', age: 22 });
    }, 2000);
    setTimeout(() => {
      const bob = this.dbs.findByProp('users', (r) => r.name === 'Bob');
      if (bob()) {
        this.dbs.update({ ...bob()!, name: 'Robert', age: 26 });
      }

    }, 4000);
  }

}
