import { httpResource } from '@angular/common/http';
import { effect, inject, Injectable, linkedSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import type { Article } from '../blogs/article.interface';
import { isGuardsCheckEnd } from '../show-source/show-source.component';
import { RouteInfo } from './RouteInfo';
import { updateRouteInfo } from './update-meta-data';
import { pa } from '../../../dist/samples/browser/chunk-KIBRB3UE';

export abstract class MetaData {
  abstract currentRouteInfo(): RouteInfo | undefined;
  abstract updateMetaTags(): void;
}

export function injectMetaData() {
  const meta = inject(MetaData);
  meta.updateMetaTags(); // initialize the meta tags
  return meta;
}

/**
 * We don't need to update the meta tags on the client side,
 * as the server has already done that. So we provide a no-op implementation.
 */
@Injectable()
export class ClientMetaData implements MetaData {
  /** this only needs to be available server-side */
  currentRouteInfo(): RouteInfo | undefined {
    return undefined;
  }
  updateMetaTags(): void {}
}

/**
 * Server-side implementation of MetaData service.
 * This service updates the meta tags based on the current route.
 * It fetches the route information and blog list from the server
 * and updates the meta tags accordingly.
 */
@Injectable()
export class ServerMetaData implements MetaData {
  #routeData = httpResource<RouteInfo[]>(() => '/assets/routes.json');
  #blogListResource = httpResource<Article[]>(() => '/assets/articles/articleList.json');

  #updateMetaTags = updateRouteInfo(inject(Meta), inject(Title));

  #router = inject(Router);
  #path = toSignal(
    this.#router.events.pipe(
      filter(isGuardsCheckEnd),
      map(ev => ev.url)
      // tap(path => console.log(`navigated to ${path}`))
    )
  );

  currentBlogInfo = linkedSignal({
    source: () => ({
      articleList: this.#blogListResource.value(),
      path: this.#path()
    }),
    computation: ({ path, articleList }) => {
      if (!path || !articleList || !path.startsWith('/blog/')) {
        return undefined;
      }
      const blogId = path.replace('/blog/', '').split('/')[0];
      return articleList.find(a => a.id === blogId || a.name === blogId);
    }
  });

  currentRouteInfo = linkedSignal({
    source: () => ({
      routeInfo: this.#routeData.value(),
      article: this.currentBlogInfo(),
      path: this.#path()
    }),
    computation: ({ routeInfo, path, article }) => {
      if (!routeInfo || !path) {
        return undefined;
      }
      if (article) {
        // if we have an article, find the routeInfo for it
        return routeInfo.find(r => r.path === `/blog/${article.name}`); // blogs have dynamic paths
      }
      return routeInfo.find(r => r.path?.startsWith(path));
    }
  });
  updateMetaTags(): void {
    const effectRef = effect(() => {
      const routeInfo = this.currentRouteInfo();
      if (!routeInfo) return;
      // console.log('Updating meta tags for', routeInfo.path);
      this.#updateMetaTags(routeInfo, this.currentBlogInfo());
    });
  }
}
