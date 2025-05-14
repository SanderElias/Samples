import { ReplaySubject } from 'rxjs';

/** use a symbol to avoid name collision with the component */
const subjProp = Symbol('subjectProp');
/**
 * Helper that wraps an input into an observable
 */
export function ObservableInput() {
  return (target: any, propertyName: string) => {
    Object.defineProperty(target, propertyName, {
      set: function (this: any, x) {
        if (x) {
          getSub(this).next(x);
        }
      },
      get: function (this: any) {
        return getSub(this);
      },
      configurable: false,
      enumerable: true
    });

    function getSub(obj): ReplaySubject<any> {
      obj[subjProp] = obj[subjProp] ?? {};
      obj[subjProp][propertyName] = obj[subjProp][propertyName] ?? new ReplaySubject<any>();
      return obj[subjProp][propertyName];
    }
  };
}
