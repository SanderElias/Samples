import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DOCUMENT,
  inject
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import type { Article } from '../article.interface';
import { Bloglist } from '../bloglist';

@Component({
  selector: 'ul [id="blog-list"]',
  imports: [RouterLink],
  template: `
    @for (article of articles(); track article.id) {
      <li>
        <a
          [routerLink]="[
            '/blog',
            article.published ? article.name : article.id
          ]"
          [title]="article.description"
          >{{ article.title }}</a
        >
      </li>
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  blogList = inject(Bloglist);
  #w = inject(DOCUMENT)

  articles = computed(() => {
    const l = this.blogList.getBlogs();
    let host = this.#w.location?.host ?? '';

    const isDev = ['localhost', '10.', '127.'].some(prefix =>
      host.startsWith(prefix)
    );
    const result: Article[] = [];
    for (const article of l) {
      if (article.published || isDev) {
        result.push(article);
      }
    }
    return result;
  });
}
