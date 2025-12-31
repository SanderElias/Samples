import type { Meta, Title } from '@angular/platform-browser';
import type { Article } from '../blogs/article.interface';
import type { RouteInfo } from './RouteInfo';

export const updateRouteInfo = (meta: Meta, title: Title) => (routeInfo: RouteInfo, article?: Article) => {
  if (routeInfo?.path) {
    const origin = `https://samples.selias.dev`;
    const desc =
      routeInfo.description || article
        ? `Blog post: ${article!.title}
      Written by Sander Elias.
      Read it on ${origin}${routeInfo.path}`
        : `Angular Sample page for ${routeInfo.path}
    sourcecode: ${routeInfo.gitFolder}
    demo: ${`${origin}${routeInfo.path}`}`;

    const updateMeta = (prop: string, content: string) => {
      if (meta.getTag(`property="${prop}"`)) {
        meta.updateTag({ property: prop, content });
      } else {
        meta.addTag({ property: prop, content });
      }
    };
    const location = new URL(origin + routeInfo.path);

    if (article) {
      updateMeta('og:type', 'article');
      updateMeta('article:published_time', article.dateAdded);
      updateMeta('article:author', 'Sander Elias');
      updateMeta('article:section', 'Blog-post');
      updateMeta('article:tag', (article.tags || []).join(', '));
    } else {
      updateMeta('og:type', 'website');
    }
    updateMeta('og:title', routeInfo.title);
    updateMeta('og:description', desc);
    updateMeta('description', desc);
    updateMeta('og:image', `${origin}${routeInfo.largeImage}`);
    updateMeta('og:image:type', 'image/png');
    updateMeta('og:image:width', '800');
    updateMeta('og:image:height', '600');
    updateMeta('og:domain', origin);
    updateMeta('og:url', location.href);
    updateMeta('twitter:title', routeInfo.title);
    updateMeta('twitter:description', desc);
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:domain', origin);
    updateMeta('twitter:image', `${origin}${routeInfo.largeImage}`);
    updateMeta('twitter:url', location.href);
    title.setTitle(routeInfo.title);
  }
};
