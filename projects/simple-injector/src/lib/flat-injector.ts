interface InjectAble<T> {
  identifier: new () => T;
  instance?: T;
}

const injectableMap = <T>() => new Map<new () => T, InjectAble<T>>();
const myMap = injectableMap();

const inject = <T>(target: new () => T): T => {
  if (!myMap.has(target)) {
    myMap.set(target, {
      identifier: target,
      instance: new target(),
    });
  }
  return myMap.get(target)!.instance! as T;
};
