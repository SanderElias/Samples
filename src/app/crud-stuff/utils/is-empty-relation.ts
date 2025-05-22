import type { UserCard } from '../../generic-services/address.service';



export const isEmptyRelation = (obj: Partial<UserCard>) => {
  const { id, ...rest } = obj; // a relation is empty if it has no other properties than id
  return Object.keys(rest).length === 0;
};
