import { getUniqueId } from './get-unique-id';

class Root implements Provider {
  identifier= this;
  injectAbles = new Map();
  providers = new Map();
  parent = this;
}

type Constructor<T> = new () => T;
type InjectAbles = Map<Constructor<unknown>, InjectAble<unknown>>;

interface InjectAble<T> {
  identifier: Constructor<T>;
  instance?: T;
  provider: Provider;
}

interface Provider {
  identifier: any;
  injectAbles: InjectAbles;
  providers: Map<any, Provider>;
  parent: Provider;
  // onDestroy?: () => void; // not yet implemented
  // onInit?: () => void; // not yet implemented
}
const injectableMap = () => new Map<Constructor<unknown>, Provider>();

const root: Provider = new Root(); // circular reference, make the root the parent of itself

let lastUsedProvider: Provider = root;

export function simpleInject<T>(target: Constructor<T>, provider = lastUsedProvider): T {
  const injectAble = provider.injectAbles.get(target);
  if (injectAble) {
    if (!injectAble.instance) {
      injectAble.instance = new target();
    }
    return injectAble.instance as T;
  }
  if (provider === lastUsedProvider) {
    // using the last used provider, so we can just add it to the injectAbles
    provider.injectAbles.set(target, { identifier: target, provider });
    return simpleInject(target, provider);
  }
  // need to go up the tree to find the provider
  const foundProvider = getProvider(target, provider);
  if (foundProvider) {
    return simpleInject(target, foundProvider);
  }
  throw new Error(`No provider found for ${target.name}`);
}

export function provide<T>(provide: Constructor<unknown>[] | Constructor<unknown>): Provider {
  if (!Array.isArray(provide)) {
    provide = [provide];
  }
  if (provide.length === 0) {
    throw new Error('No providers provided');
  }
  const constructor = `Provider-${getUniqueId()}`;
  const provider: Provider = {
    identifier: constructor,
    injectAbles: new Map(),
    providers: new Map(),
    parent: lastUsedProvider,
  };
  lastUsedProvider.providers.set(constructor, provider);
  lastUsedProvider = provider;
  provide.forEach(provide => {
    provider.injectAbles.set(provide, { identifier: provide, instance: new provide(), provider });
  });
  return provider;
}

export function getProvider<T>(target: Constructor<T>, provider: Provider = lastUsedProvider) {
  if (provider.injectAbles.has(target)) {
    return provider;
  }
  if (provider.parent === provider) {
    // at the top of the three, just bail
    return undefined;
  }
  return getProvider(target, provider.parent);
}

export const dumpTree = (provider: Provider = root, indent = 0) => {
  const id = typeof provider.identifier === 'string' ? provider.identifier : provider.identifier.constructor.name;
  console.log(' '.repeat(indent), id);
  provider.injectAbles.forEach(injectable => {
    console.log('  '.repeat(indent), injectable.identifier.name);
  });
  provider.providers.forEach(child => dumpTree(child, indent + 2));
};
