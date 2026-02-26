import { httpResource } from '@angular/common/http';
import { Component, computed } from '@angular/core';
import type { CaddyConfig, Handler, ServerInfo } from './caddy-config-types';

function extractFolders(handlers: Handler[] | undefined): string[] {
  if (!handlers) return [];
  return handlers.flatMap(h => {
    const roots: string[] = [];
    if (h.root) roots.push(h.root);
    if (h.routes) {
      for (const route of h.routes) {
        roots.push(...extractFolders(route.handle));
      }
    }
    return roots;
  });
}

@Component({
  selector: 'se-caddy',
  imports: [],
  template: `
    <h1>Caddy Server Config</h1>
    @if (config.isLoading()) {
      <p>Loading…</p>
    } @else if (config.error()) {
      <p>Could not reach Caddy admin at <code>{{ adminUrl }}</code></p>
    } @else {
      @for (server of servers(); track server.name) {
        <section>
          <h2>{{ server.name }}</h2>
          <p><strong>Listening on:</strong> {{ server.listen.join(', ') }}</p>
          @if (server.hosts.length) {
            <p><strong>Hosts:</strong> {{ server.hosts.join(', ') }}</p>
          }
          @if (server.folders.length) {
            <p><strong>Folders:</strong></p>
            <ul>
              @for (folder of server.folders; track folder) {
                <li>{{ folder }}</li>
              }
            </ul>
          }
        </section>
      }
      @if (servers().length === 0) {
        <p>No HTTP servers found in config.</p>
      }
    }
  `,
})
export class CaddyComponent {
  readonly adminUrl = 'http://kapow:2019';

  config = httpResource<CaddyConfig>(() => `${this.adminUrl}/config/`);

  servers = computed<ServerInfo[]>(() => {
    const data = this.config.value();
    const httpServers = data?.apps?.http?.servers ?? {};
    return Object.entries(httpServers).map(([name, server]) => {
      const hosts = (server.routes ?? []).flatMap(route =>
        (route.match ?? []).flatMap(m => m.host ?? [])
      );
      const folders = (server.routes ?? []).flatMap(route =>
        extractFolders(route.handle)
      );
      return {
        name,
        listen: server.listen ?? [],
        hosts: [...new Set(hosts)],
        folders: [...new Set(folders)],
      };
    });
  });
}
