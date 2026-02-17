import { Component, computed, inject } from '@angular/core';
import { Bloglist } from '../bloglist';
import { RouterLink } from '@angular/router';
import type { Article } from '../article.interface';

@Component({
  selector: 'ul [id="blog-list"]',
  imports: [RouterLink],
  template: `
    @for (article of articles(); track article.id) {
      <li>
        <a [routerLink]="['/blog', article.published ? article.name : article.id]" [title]="article.description">{{ article.title }}</a>
      </li>
    }
  `,
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  blogList = inject(Bloglist);

  articles = computed(() => {
    const l = this.blogList.getBlogs();
    const result: Article[] = [];
    for (const article of l) {
      if (article.published) {
        result.push(article);
      }
    }
    return result;
  });
}
