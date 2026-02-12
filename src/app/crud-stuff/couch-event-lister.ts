import { Observable, retry } from 'rxjs';
import { SSE } from 'sse.js';
import type { CouchDbEvent } from './couch.types';

export function couchEventLister(
  base = 'http://localhost:5984',
  db: string,
) {
  // hardcoding the baseUrl for now. the username password should not be hardcoded in real world apps.
  const dbUrl = `${base}/${db}`;

  return new Observable<CouchDbEvent>(subscriber => {
    const eventSource = new SSE(
      `${dbUrl}/_changes?feed=eventsource&include_docs=false&since=now&heartbeat=3000`,
      {

        withCredentials: true,
        autoReconnect: true, // Enable auto-reconnect
        reconnectDelay: 1000, // Wait 1 seconds before reconnecting
        maxRetries: null, // Retry indefinitely (set a number to limit retries)
        useLastEventId: true, // Send Last-Event-ID header on reconnect (recommended)
        start: false // We'll start it manually after setting up handlers
      }
    );

    // eventSource.onreadystatechange = () => {
    //   console.log(
    //     'CouchDB EventSource readyState changed to:',
    //     eventSource.readyState
    //   );
    // };
    eventSource.onmessage = event => {
      try {
        const { data } = event;
        if (data !== '\n') {
          // ignore keep-alive new lines
          const json = JSON.parse(data) as CouchDbEvent;
          subscriber.next(json);
        } else {
          // console.log('CouchDB keep-alive received');
        }
      } catch (err) {
        console.error('Error parsing CouchDB event data:', err);
        // subscriber.error(err); // internal, so don't error out the stream.
      }
    };

    // iot123456

    eventSource.onerror = error => {
      console.error('CouchDB EventSource error:', error);
      subscriber.error(error);
      eventSource.close();
    };

    eventSource.stream(); // start the connection
    console.log('CouchDB event listener started');

    // Teardown logic: close SSE when unsubscribed
    return () => {
      eventSource.close();
      console.log('CouchDB event listener closed');
    };
  }).pipe(
    retry(5) // Retry up to 5 times on error
  );
}
