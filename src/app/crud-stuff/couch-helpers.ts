import { type UserCard, userCard } from '../generic-services/address.service';
import { type SortField } from './relations.service';

const baseFallback = 'https://couchdb.eliasweb.nl';

export const headers = {
  'Content-Type': 'application/json',
  credentials: 'include',
  mode: 'cors'
};

// a couple of helper functions to create the database,indexes and add some data to it.
export async function goAddData(
  iterations = 5,
  ammountPerIteration = 1000,
  base = baseFallback
) {
  // add 5000 records when called without parameters.
  const fakerModule = import('@faker-js/faker');
  const module = await fakerModule;
  const url = `${base}/relations/_bulk_docs`;
  for (let i = 0; i <= iterations; i += 1) {
    const newRelations: (UserCard & { _id?: string })[] = [];
    for (let j = 0; j < ammountPerIteration; j += 1) {
      const relation = await userCard(module.faker);
      newRelations.push({ ...relation, _id: relation.id });
    }
    await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ docs: newRelations })
    });
  }
}
export async function createIndexes(base = baseFallback) {
  await createIndex('name', base);
  await createIndex('username', base);
  await createIndex('email', base);
  console.log('Indexes created');
}

async function createIndex(fieldName: SortField, base = baseFallback) {
  const url = `${base}/relations/_index`;
  const body = {
    index: { fields: [fieldName] },
    name: fieldName,
    type: 'json',
    ddoc: 'fieldIndex-' + fieldName
  };
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    throw new Error(`Error creating index: ${res.statusText}`);
  }
  const data = await res.json();
  console.log('Index created', data);
  return data;
}
