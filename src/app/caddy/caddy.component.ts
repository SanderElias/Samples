import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, computed } from '@angular/core';
import type {
  CaddyConfig,
  CaddyRoute,
  CaddyServer,
  MatchCondition
} from './caddy-config-types';

@Component({
  selector: 'se-caddy',
  imports: [JsonPipe],
  template: `
    <section class="caddy-root">
      <h1>Caddy Config</h1>

      @if (!endpointsRes.hasValue()) {
        <p>Loading config…</p>
      } @else {
        <h2>Routes (srv0)</h2>

        @for (ep of endpoints(); track $index) {
          <details>
            <summary>
              {{ ep.match ? hostList(ep.match) : 'No match conditions' }}
            </summary>
            <pre>{{ ep | json }}</pre>
          </details>
        }
      }
    </section>
  `,
  styleUrls: ['./caddy.component.css']
})
export class CaddyComponent {
  endpointsRes = httpResource<CaddyServer>(
    () => ({
      url: 'https://caddyadmin.eliasweb.nl/config/apps/http/servers/srv0',
      credentials: 'include'
    }),
    { defaultValue: {} as CaddyConfig }
  );

  endpoints = computed((): CaddyRoute[] => {
    if (!this.endpointsRes.hasValue()) return [];
    const val = this.endpointsRes.value();
    const routes = val?.routes || [];
    return routes;
  });

  hostList = (h: MatchCondition[] = []) =>
    h.map(match => (match?.host ?? []).join(', ')).join('; ');
}
