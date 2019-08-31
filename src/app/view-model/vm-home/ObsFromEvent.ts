import { ElementRef, QueryList } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const EventStream = Symbol('ObsFromEvent');

export function ObsFromEvent<K extends keyof HTMLElementEventMap>(
  eventName: K
): any {
  return (target: any, propertyKey: string | symbol) => {
    return {
      get() {
        return fetchSubject(this, propertyKey).pipe(debounceTime(4));
      },
      set(ql: QueryList<ElementRef>) {
        if (!(ql instanceof QueryList)) {
          throw new Error('ObsFromEvent expects a QueryList');
        }
        const sub = fetchSubject(this, propertyKey);
        ql.forEach(ref => {
          if (!(ref instanceof ElementRef)) {
            throw new Error('ObsFromEvent expects a QueryList<ElementRef>');
          }
          const el = ref.nativeElement as HTMLElement;
          if (!el[EventStream]) {
            // Don't hook up more as once for each element
            el.addEventListener(eventName, e => sub.next(e));
            el[EventStream] = EventStream;
          }
        });
      },
    };
  };
}

function fetchSubject(instance, propertyKey): Subject<Event> {
  const ref = (instance[EventStream] = instance[EventStream] || {});
  if (!ref[propertyKey]) {
    ref[propertyKey] = new Subject<Event>();
  }
  return ref[propertyKey];
}
