import { HttpClient } from '@angular/common/http';
import {
  Component,
  inject,
  input,
  linkedSignal,
  resource,
  ViewEncapsulation
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
      <div aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
          <symbol id="icon-tip" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 2l-1 1M3 2l1 1M21 16l-1-1M3 16l1-1M12 3c-4 0-6.048 1.95-6 5 .023 1.487.5 2.5 1.5 3.5 1 1 1.5 1.5 1.5 3.5h6c0-2 .5-2.5 1.5-3.5 1-1 1.477-2.013 1.5-3.5.048-3.05-2-5-6-5Z"
              stroke="var(--icon-color)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 18h6M10 21h4"
              stroke="var(--icon-accent-color)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </symbol>

          <symbol id="icon-warning" viewBox="0 0 24 24" fill="none">
            <path
              d="M9.6 3.6c1.1-1.8 3.7-1.8 4.8 0L22.4 17.6c1.1 1.8-.2 4.1-2.4 4.1H4c-2.1 0-3.4-2.3-2.4-4.1L9.6 3.6z"
              fill="var(--icon-color)"
            />
            <g
              transform="translate(0,-0.94) translate(12,13.4) scale(1.51) translate(-12,-13.4)"
            >
              <rect
                x="11"
                y="8.0"
                width="2"
                height="8.0"
                rx="1"
                fill="var(--icon-contrast-color)"
              />
              <circle
                cx="12"
                cy="17.8"
                r="1"
                fill="var(--icon-contrast-color)"
              />
            </g>
          </symbol>

          <symbol id="icon-important" viewBox="0 0 24 24" fill="none">
            <circle fill="var(--icon-color)" cx="12" cy="21.333" r="2"></circle>
            <path
              fill="var(--icon-color)"
              d="M14 16a2 2 0 1 1 -4 0V3.333a2 2 0 1 1 4 0v12.667z"
            ></path>
          </symbol>

          <symbol
            id="icon-note"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--icon-accent-color)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M12 11.5V16.5M12 7.51v-.01M12 22C17.5 22 22 17.5 22 12S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
            />
          </symbol>

          <symbol id="icon-uhm" viewBox="0 0 24 24" fill="none">
            <path
              fill="var(--icon-color)"
              d="M14 18a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2c.4 0 4-.7 4-3.3C18 6.4 16.7 5 14.7 5 13 5 12 6.3 12 7a2 2 0 1 1-4 0c0-3.3 3-6 6.7-6 5.3 0 7.3 4 7.3 7.3 0 2.8-1.5 4.9-4.3 6-.6.2-1.2.4-1.7.5V16c0 1.1-.9 2-2 2zM12 21.3a2 2 0 1 0 4 0 2 2 0 0 0-4 0M2 21.3a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4 18a2 2 0 0 0 2-2V4a2 2 0 1 0-4 0v12c0 1.1.9 2 2 2z"
            />
          </symbol>
        </svg>
      </div>
      <h1>{{ blogList.getBlogById(id())?.title || 'Welcome to the blog' }}</h1>
      <main>
        <article class="rich-text" [innerHTML]="testblog.value()"></article>
      </main>
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
