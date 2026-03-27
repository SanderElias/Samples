import { HttpClient } from '@angular/common/http';
import {
  Component,
  inject,
  input,
  linkedSignal,
  resource,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';

import { BlogListComponent } from './blog-list/blog-list.component';
import { Bloglist } from './bloglist';

@Component({
  selector: 'se-blogs',
  imports: [BlogListComponent],
  template: `
    @defer (hydrate never) {
      <input
        id="blog-menu-toggle"
        type="checkbox"
        aria-label="Toggle article menu"
      />
      <label for="blog-menu-toggle" class="blog-menu-btn" title="Toggle article menu">
        <span class="sr-only menu-open-text">Open article menu</span>
        <span class="sr-only menu-close-text">Close article menu</span>
        <svg class="menu-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24">
          <use href="#icon-menu"></use>
        </svg>
        <svg class="close-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24">
          <use href="#icon-close"></use>
        </svg>
      </label>
      <header>
        <h1>{{ blogList.getBlogById(id())?.title || 'Welcome to the blog' }}</h1>
      </header>
      <main tabindex="0" aria-label="Blog article content">
        <article class="rich-text" [innerHTML]="testblog.value()"></article>
      </main>
      <ul id="blog-list"></ul>
    }
  `,
  styleUrl: './blogs.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None
})
export class BlogsComponent {
  san = inject(DomSanitizer);
  http = inject(HttpClient);
  blogList = inject(Bloglist);
  title = inject(Title);
  id = input<string>();

  url = linkedSignal(() => {
    const id = this.id() ?? 'xYj937jtgycHjWm1';
    const blog = this.blogList.getBlogById(id);
    if (blog) {
      return `/assets/articles/${blog.name}.md`;
    } else {
      return `/assets/articles/404.md`;
    }
  });

  testblog = resource({
    params: () => this.url(),
    loader: async ({ params }) => {
      const content = await firstValueFrom(
        this.http.get(params, { responseType: 'text' })
      );
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
