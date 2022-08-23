import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { filter, pluck, share } from 'rxjs/operators';

/** available types. */

export enum MsgBusType {
  /** use for generic/one-off messages */
  Generic = 'generic',

  /** use for changes in auth status */
  Auth = 'auth',

  /** use for plugins */
  Plugins = 'plugins',
}

/** describes a message */

export interface MsgBusMessage {
  /** type as defined in above enum */
  type: MsgBusType;

  /** subtype, can be used to diversify in a certain module */
  subType?: string;

  /** payload, usually json-like data */
  payload: any;
}

/**
 * Messagebus service
 */

@Injectable({
  providedIn: 'root',
})
export class MsgBusSerrvice {
  /** internal subject to push out msg, holds on to the last one */

  private messages = new ReplaySubject<MsgBusMessage>(1);

  /**
   * internal observable, that makes sharing the msg easier.
   * (note, it doesn't replay!)
   */

  private messages$ = this.messages.pipe(share());

  /**
   * sends out a message into the bus
   */

  emit = (m: MsgBusMessage) => {
    this.messages.next(m);
  };

  /**
   * Return a function that can emit messages of a set Type.
   * this makes it easier if you have the need to repeated msgs.
   * sample:
   * ```
   *    const authUpdate = MsgBusService.createEmitter<AuthMessage>(MsgBusType.auth)
   *    authUpdate({user, ttl})
   * ```
   */

  createEmitter = <T>(type: MsgBusType, subType?: string) => (payload: T) =>
    this.emit({ type, payload, subType });

  /**
   *  !! FOR DEBUGGING ONLY !!
   *  generic listener observable for __ALL__ messages that pass.
   *  normally you use a filteredObservable
   */

  ListenForAllMessages = (): Observable<MsgBusMessage> => {
    return this.messages$;
  };

  /**
   * returns an observable that only fires on its given MsgBusType, and subfilter.
   * it only emits the payload, not the complete message.
   * you can put in a type for the payload like this:
   * `const authEvents$ = filteredObservable<AuthMessage>(MsgBusType.auth)`
   */

  filteredObservable = <T>(filterOn: MsgBusType, subTypeToFilter?: string): Observable<T> => {
    return this.messages$.pipe(
      filter(
        m => m.type === filterOn && (subTypeToFilter === undefined || m.subType === subTypeToFilter)
      ),
      pluck('payload')
      // tap<T>(pl => console.log('msg', type, subType, pl))
    );
  };
}
