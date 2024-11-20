import { Component, DestroyRef, inject, Injectable, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'se-connected-websocket',
  standalone: true,
  imports: [],
  template: ` <p>the latest message is: {{ messageSignal() }}</p> `,
  styleUrl: './connected-websocket.component.css',
})
export class ConnectedWebsocketComponent {
  messageSignal = injectConnectedWebsocketSignal();


}

const injectConnectedWebsocketSignal = () => {
  const messageSignal = signal(undefined as Message);
  const service = inject(ConnectedWebsocketService);
  inject(DestroyRef).onDestroy(() => service.disconnect(messageSignal));
  service.connect(messageSignal);
  return messageSignal;
};

// stubb the type for now.
type Message = string | undefined;

/**
 * this is the service that will manage the connection to the websocket
 */
@Injectable({
  providedIn: 'root',
})
class ConnectedWebsocketService {
  subscribers = new Set<WritableSignal<Message>>();

  connect = (s: WritableSignal<Message>) => {
    if (this.subscribers.size === 0) {
      // connect to the websocket
      // and hook up the message handler method to the websocket
    }
    this.subscribers.add(s);
  };

  disconnect = (s: WritableSignal<Message>) => {
    this.subscribers.delete(s);
    if (this.subscribers.size === 0) {
      // disconnect from the websocket
    }
  };

  handleMessage = (message: Message) => {
    this.subscribers.forEach(s => s.set(message));
  };
}
