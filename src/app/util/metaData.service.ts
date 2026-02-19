import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { combineLatest, filter, map, of, type Observable } from 'rxjs';
import type { Article } from '../blogs/article.interface';
import { isGuardsCheckEnd } from '../show-source/show-source.component';
import { RouteInfo } from './RouteInfo';
import { updateRouteInfo } from './update-meta-data';

export abstract class MetaData {
  abstract currentRouteInfo$: Observable<
    | {
        url: string;
        routeInfo: RouteInfo | undefined;
        article: Article | undefined;
      }
    | undefined
  >;
}

export function injectMetaData() {
  const meta = inject(MetaData);
  return meta;
}

/**
 * We don't need to update the meta tags on the client side,
 * as the server has already done that. So we provide a no-op implementation.
 */
@Injectable()
export class ClientMetaData implements MetaData {
  /** this only needs to be available server-side */
  currentRouteInfo$ = of(undefined);
}

/**
 * Server-side implementation of MetaData service.
 * This service updates the meta tags based on the current route.
 * It fetches the route information and blog list from the server
 * and updates the meta tags accordingly.
 */
@Injectable()
export class ServerMetaData implements MetaData {
  #http = inject(HttpClient);
  #router = inject(Router);
  #routeData$ = this.#http.get<RouteInfo[]>('/assets/routes.json');
  #blogList$ = this.#http.get<Article[]>('/assets/articles/articleList.json');
  #currentUrl$ = this.#router.events.pipe(
    filter(isGuardsCheckEnd),
    map(ev => ev.url)
  );

  currentRouteInfo$ = combineLatest([
    this.#routeData$,
    this.#blogList$,
    this.#currentUrl$
  ]).pipe(
    map(([routesData, blogList, url]) => {
      if (!routesData || !url) {
        return undefined;
      }
      let article: Article | undefined;
      if (url.startsWith('/blog/')) {
        const blogId = url.replace('/blog/', '').split('/')[0];
        article = blogList.find(a => a.id === blogId || a.name === blogId);
        if (!article) {
          console.warn(`No article found for blogId ${blogId}`);
        }
      }
      const routeInfo = routesData.find(r => r.path?.startsWith(url));
      if (!routeInfo) {
        console.warn(`No routeInfo found for url ${url}`);
      }
      return {
        url,
        routeInfo,
        article
      };
    })
  );

  #updateMetaTags = updateRouteInfo(inject(Meta), inject(Title));

  constructor() {
    this.currentRouteInfo$.subscribe(ri => {
      const { url, routeInfo, article } = ri || {};
      // if (url?.startsWith('/blog/') ) {
      //   console.dir({ url, article, p: routeInfo?.path });
      // }
      if (routeInfo) {
        this.#updateMetaTags(routeInfo, article);
      }
    });
  }
}
