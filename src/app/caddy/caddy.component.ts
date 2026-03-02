import { httpResource } from '@angular/common/http';
import { Component, computed } from '@angular/core';
import type {
  CaddyConfig,
  CaddyRoute,
  CaddyServer,
  Handler,
  MatchCondition
} from './caddy-config-types';
import { AuthenticadedUserOnlyComponent } from '../authenticaded-user-only/authenticaded-user-only.component';

@Component({
  selector: 'se-caddy',
  imports: [AuthenticadedUserOnlyComponent],
  template: `
    <section class="caddy-root">
      <h1>Caddy Config</h1>
      <authenticated-user-only>
        @if (!endpointsRes.hasValue()) {
          <p>Loading config…</p>
        } @else {
          <h2>Routes (srv0)</h2>

          @for (ep of endpoints(); track $index) {
            <details>
              <summary>
                {{ ep.match ? hostList(ep.match) : 'No match conditions' }}
              </summary>
              <div class="ep-detail">
                @for (h of leafHandlers(ep); track $index) {
                  <span class="handler-chip">{{ handlerLabel(h) }}</span>
                }
              </div>
            </details>
          }
        }
      </authenticated-user-only>
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

  private readonly RESPONDERS = new Set([
    'reverse_proxy',
    'file_server',
    'static_response',
    'rewrite'
  ]);

  leafHandlers = (ep: CaddyRoute): Handler[] => {
    const collect = (handlers: Handler[]): Handler[] =>
      handlers.flatMap(h =>
        h['handler'] === 'subroute'
          ? ((h['routes'] as CaddyRoute[]) ?? []).flatMap(r =>
              collect(r.handle ?? [])
            )
          : this.RESPONDERS.has(h['handler'])
            ? [h]
            : []
      );
    return collect(ep.handle ?? []);
  };

  handlerLabel = (h: Handler): string => {
    switch (h['handler']) {
      case 'reverse_proxy':
        return `reverse_proxy → ${((h['upstreams'] ?? []) as { dial: string }[]).map(u => u.dial).join(', ')}`;
      case 'file_server':
        return `file_server${h['root'] ? ` (${h['root']})` : ''}`;
      case 'rewrite':
        return `rewrite${h['uri'] ? ` → ${h['uri']}` : ''}`;
      case 'static_response':
        return `static_response${h['status_code'] != null ? ` ${h['status_code']}` : ''}`;
      default:
        return h['handler'] as string;
    }
  };
}
