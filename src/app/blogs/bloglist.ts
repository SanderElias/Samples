import { httpResource } from '@angular/common/http';
import { Injectable, effect } from '@angular/core';
import { Deferred } from '@se-ng/signal-utils';
import type { Article } from './article.interface';

@Injectable({ providedIn: 'root' })
export class Bloglist {
  #blogListResource = httpResource<Article[]>(() => '/assets/articles/articleList.json');

  bloglist = new Deferred<Article[]>;

  _ = effect(() => {
    const blogList = this.#blogListResource.value();
    if (blogList) {
      this.bloglist.resolve(blogList);
    }
  });

  getBlogs(): Article[] {
    const list = this.#blogListResource.value() || [];

    return list.filter(blog => blog.published);
  }

  getBlogById(id: string | undefined): Article | undefined {
    if (!id) {
      return undefined;
    }
    const list = this.#blogListResource.value() || [];
    return list.find(b => b.id === id || (b.published && b.name === id));
  }

  idList = async (): Promise<{ id: string }[]> => {
    const list: { id: string }[] = [];
    const  blogs  = await this.bloglist.promise;
    for (const blog of blogs!) {
      list.push({ id: blog.id });
      if (blog.published) {
        list.push({ id: blog.name });
      }
    }
    console.log('idList', list);
    return list;
  };
}
