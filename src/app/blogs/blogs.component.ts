import { HttpClient, httpResource } from '@angular/common/http';
import { Component, inject, input, linkedSignal, resource, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
import type { Id } from '../in-mem-sample/in-mem.model';

interface Article {
  id: Id;
  name: string;
  title: string;
  description: string;
  tags: string[];
  published?: boolean;
  dateAdded: string;
}

@Component({
  selector: 'se-blogs',
  imports: [],
  template: `
    <!-- @defer (hydrate never) { -->
    <article class="rich-text" [innerHTML]="testblog.value()"></article>
    <!-- } -->
  `,
  styleUrl: './blogs.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BlogsComponent {
  san = inject(DomSanitizer);
  http = inject(HttpClient);
  title = inject(Title);
  id = input<string>();
  blogListResource = httpResource<Article[]>(() => '/assets/articles/articleList.json');

  url = linkedSignal(() => {
    const list = this.blogListResource.value();
    const id = this.id();
    if (list && id) {
      const blog = list.find(b => b.id === id || b.name === id);
      if (blog) {
        return `/assets/articles/${blog.name}.md`;
      } else {
        console.warn('Blog not found for id:', id);
        return `/assets/articles/404.md`;
      }
    }
  });

  testblog = resource({
    params: this.url, // hardcoded for now.
    loader: async ({ params }) => {
      const content = await firstValueFrom(this.http.get(params, { responseType: 'text' }));
      if (content) {
        const { parser } = await import('./parser');
        const html = await parser(content);

        const title = content.match(/# (.*)/);
        if (title) {
          this.title.setTitle(title[1]);
        }
        // console.log('html', html);
        return this.san.bypassSecurityTrustHtml(html);
      }
      // console.log('data', data)
      return 'blog not found';
    }
  });
}
