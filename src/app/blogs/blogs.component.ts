import { Component, inject, resource, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';

const mm = import('micromark');
const mmGfm = import('micromark-extension-gfm');
// import {gfm, gfmHtml} from 'micromark-extension-gfm'

@Component({
  selector: 'se-blogs',
  imports: [],
  template: `
    <!-- @defer (hydrate never) { -->
    <article class="rich-text" [innerHTML]="testblog.value()"></article>
    <!-- } -->
  `,
  styleUrl: './blogs.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class BlogsComponent {
  san = inject(DomSanitizer);
  title = inject(Title);

  testblog = resource({
    request: () => `/assets/articles/dry-kiss.md`, // hardcoded for now.
    loader: async ({ request }) => {
      console.log('request', request);
      const response = await fetch(request);
      const content = await response.text();
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
    },
  });
}

