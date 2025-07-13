import { createStore, get as oGet, set as oSet, update as oUpdate, del as oDel } from 'idb-keyval';

// set up a custom store for the MQTT data
const myStore = createStore('mqtt', 'se-store');
export const get = (key: string) => oGet(key, myStore);
export const set = (key: string, value: any) => oSet(key, value, myStore);
export const update = (key: string, value: any) => oUpdate(key, value, myStore);
export const del = (key: string) => oDel(key, myStore);
