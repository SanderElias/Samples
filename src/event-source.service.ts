import { inject,Injectable } from '@angular/core';

import { InMemoryDataService } from './in-memory.service';

@Injectable({
  providedIn: 'root',
})
export class EventSourceService {
  db = inject(InMemoryDataService);

  faker = import('@faker-js/faker');

  async createEvent(maxRows = 25) {
    const { faker } = await this.faker;
    const curDb = this.db.list('contact');
    const actions = ['update'];
    if (curDb.length < maxRows) {
      actions.push('create');
    }
    const action = curDb.length < 5 ? 'create' : getWeightedAction();
    const id = action === 'create' ? '' : curDb[Math.floor(Math.random() * curDb.length)].id;
    if (action === 'delete') {
      this.db.delete(id);
      return { action, id };
    }
    const fieldOptions = {
      name: faker.name.firstName,
      email: faker.internet.email,
      // description: faker.lorem.sentence,
      dob: faker.date.past,
      street: faker.address.streetAddress,
      zip: faker.address.zipCode,
      city: faker.address.city,
      // image: faker.image.avatar,
      tag: faker.lorem.word,
    };
    const field = Object.keys(fieldOptions)[Math.floor(Math.random() * Object.keys(fieldOptions).length)];
    const value = fieldOptions[field]();
    const row = { id, type: 'contact', [field]: value };
    if (action === 'create') {
      row.name = faker.name.firstName();
    }
    // console.log(row);
    this.db[action](row);
    return { action, row };
  }
}

const actions = (
  [
    ['create', 5],
    ['update', 1000],
    ['delete', 1],
  ] as [string, number][]
).reduce((acc, [action, weight]) => {
  for (let i = 0; i < weight; i++) {
    acc.push(action);
  }
  return acc;
}, []);

function getWeightedAction() {
  return actions[Math.floor(Math.random() * actions.length)];
}

(async () => {
  const es = new EventSourceService(new InMemoryDataService());
  let count = 1500;
  while (count--) {
    const r = await es.createEvent();
  }
  // console.table(es.db.list('contact'));
})();
