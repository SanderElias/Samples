
let get: (key: string) => Promise<any>;
let set: (key: string, value: any) => Promise<any>;
let update: (key: string, value: any) => Promise<any>;
let del: (key: string) => Promise<any>;

if (typeof indexedDB !== 'undefined') {
  // set up a custom store for the MQTT data
  const { createStore, get: oGet, set: oSet, update: oUpdate, del: oDel } = await import('idb-keyval');
  const myStore = createStore('mqtt', 'se-store');
  get = (key: string) => oGet(key, myStore);
  set = (key: string, value: any) => oSet(key, value, myStore);
  update = (key: string, value: any) => oUpdate(key, value, myStore);
  del = (key: string) => oDel(key, myStore);
} else {
  // avoid errors during SSR
  const mem = new Map<string, any>();
  set = async (k: string, v: any) => mem.set(k, v);
  del = async (k: string) => mem.delete(k);
  update = async (k: string, v: any) => mem.set(k, v);
  get = async (_: string) => undefined;
}

export { get, set, update, del };
