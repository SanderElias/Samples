import { ElementRef, isDevMode, QueryList } from '@angular/core';
import { NEVER, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const EventStream = Symbol('ObsFromEvent');

/**
 * Decorator to make an event stream from a QueryList<ElementRef> (the result of @ViewChildren)
 * @param eventName existing in type `HTMLElementEventMap`
 *
 * @example
 * @ObsFromEvent('click')
 * @ViewChildren('someElements', {read: ElementRef})
 * buttonClicks$: Observable<Event>;
 *
 * doSomething$ = this.buttonClicks$.pipe(
 *   map(event => `click from ${event.target.innerText}`)
 * )
 */
export function ObsFromEvent<K extends keyof HTMLElementEventMap>(eventName: K): any {
  return (target: any, propertyKey: string | symbol): PropertyDescriptor => {
    if (globalThis.isServer) {
      // console.log('ObsFromEvent is not supported on the server!')
      return {
        get() {
          /** return an debounce observable when read. */
          // return fetchSubject(this, propertyKey).pipe(debounceTime(4));
          return  NEVER;
        },
        set() {},
      };
    }
    return {
      get() {
        /** return an debounce observable when read. */
        return fetchSubject(this, propertyKey).pipe(debounceTime(4));
      },
      set(ql: QueryList<ElementRef>) {
        if (!(ql instanceof QueryList)) {
          /**
           * Make sure we have an querylist during runtime!
           * just ignore all other incoming things
           */
          if (isDevMode()) {
            console.warn(`obsFromEvent called with ${ql['constructor']['name']} instead of queryList`);
          }
          return;
        }
        /** fetch the subject. */
        const eventSubject = fetchSubject(this, propertyKey);
        /** make sure every item in the querylist will get the events handled */
        ql.forEach(elementRef => {
          if (!(elementRef instanceof ElementRef)) {
            /** check for the proper type, we need an elementRef here */
            throw new Error('ObsFromEvent expects a QueryList<ElementRef>');
          }
          const el = elementRef.nativeElement as HTMLElement & { [EventStream]: Symbol };
          if (!el[EventStream]) {
            /**
             * Don't hook up more as once for each element.
             * as QueryList is a live list, there might be changes.
             * use the symbol to prevent clashes
             */
            el.addEventListener(eventName, e => eventSubject.next(e));
            el[EventStream] = EventStream;
          }
        });
      },
    };
  };
}

/**
 * Helper to fetch/generate the subject for this instance/propertyKey pair
 */
function fetchSubject(instance: any, propertyKey: string | symbol): Subject<Event> {
  /** use the symbol EventStream to prevent clashes with anything else */
  const ref = (instance[EventStream] = instance[EventStream] || {});
  if (!ref[propertyKey]) {
    ref[propertyKey] = new Subject<Event>();
  }
  return ref[propertyKey];
}
