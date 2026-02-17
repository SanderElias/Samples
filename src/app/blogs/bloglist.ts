import { HttpClient, httpResource } from '@angular/common/http';
import { Injectable, computed, effect, inject } from '@angular/core';
import { Deferred } from '@se-ng/signal-utils';
import type { Article } from './article.interface';
import { catchError, firstValueFrom, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Bloglist {
  http = inject(HttpClient);
  #blogListResource = httpResource<Article[]>(
    () => '/assets/articles/articleList.json'
  );

  bloglist = new Deferred<Article[]>();

  _ = effect(() => {
    const blogList = this.#blogListResource.value();
    if (blogList) {
      this.bloglist.resolve(blogList);
    }
  });

  getBlogs = computed(() => {
    return this.#blogListResource.value() || [];
  });

  getBlogById(id: string | undefined): Article | undefined {
    if (!id) {
      return undefined;
    }
    const list = this.#blogListResource.value() || [];
    return list.find(b => b.id === id || (b.published && b.name === id));
  }

  #list = firstValueFrom(
    this.http.get<Article[]>('/assets/articles/articleList.json').pipe(
      // in case the file is missing or malformed, we don't want to break the app
      // so we catch errors and return an empty list instead
      catchError(() => of([])),
      map(blogs => {
        const list: { id: string }[] = [];
        for (const blog of blogs) {
          list.push({ id: blog.id });
          if (blog.published) {
            list.push({ id: blog.name });
          }
        }
        return list;
      })
    )
  );

  idList = () => this.#list;
}
