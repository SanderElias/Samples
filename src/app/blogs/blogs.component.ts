import { HttpClient } from '@angular/common/http';
import { Component, inject, input, linkedSignal, resource, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
import { BlogListComponent } from './blog-list/blog-list.component';
import { Bloglist } from './bloglist';

@Component({
  selector: 'se-blogs',
  imports: [BlogListComponent],
  template: `
    @defer (hydrate never) {
      <h1>{{ blogList.getBlogById(id())?.title || 'Welcome to the blog' }}</h1>
      <article class="rich-text" [innerHTML]="testblog.value()"></article>
      <ul id="blog-list"></ul>
    }
  `,
  styleUrl: './blogs.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BlogsComponent {
  san = inject(DomSanitizer);
  http = inject(HttpClient);
  blogList = inject(Bloglist);
  title = inject(Title);
  id = input<string>('welcome');

  url = linkedSignal(() => {
    const blog = this.blogList.getBlogById(this.id());
    if (blog) {
      return `/assets/articles/${blog.name}.md`;
    } else {
      return `/assets/articles/404.md`;
    }
  });

  testblog = resource({
    params: () => this.url(),
    loader: async ({ params }) => {
      const content = await firstValueFrom(this.http.get(params, { responseType: 'text' }));
      if (content) {
        const { parser } = await import('./parser');
        const html = await parser(content);

        const title = content.match(/# (.*)/);
        if (title) {
          this.title.setTitle(title[1]);
        }
        return this.san.bypassSecurityTrustHtml(html);
      }
      return 'blog not found';
    }
  });

}
