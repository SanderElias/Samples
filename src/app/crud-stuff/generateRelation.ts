import { userCard } from '../generic-services/address.service';

export async function generateRelation() {
  const fakerModule = import('@faker-js/faker');
  const module = await fakerModule;
  return userCard(module.faker);
}
