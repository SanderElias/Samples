import { Component, resource, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const mm = import('micromark');

@Component({
  selector: 'se-blogs',
  imports: [],
  template: `
    <h1>Blog</h1>
    <div [innerHTML]="testblog.value()"></div>
  `,
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  san = inject(DomSanitizer);

  testblog = resource({
    request: () => `http://0.0.0.0:8888/articles/dry-kiss.md`, // hardcoded for now.
    loader: async ({ request }) => {
      console.log('request', request);
      const response = await fetch(request);
      console.log('response', response);
      const content = await response.text();
      if (content) {
        const { micromark } = await mm;
        const html = micromark(content, { allowDangerousHtml: true });
        // console.log('html', html);
        return this.san.bypassSecurityTrustHtml(html);
      }
      // console.log('data', data)
      return 'blog not found';
    },
  });
}
