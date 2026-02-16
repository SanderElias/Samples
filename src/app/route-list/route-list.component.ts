import { httpResource } from '@angular/common/http';
import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { compile } from 'path-to-regexp';

@Component({
  selector: 'se-route-list',
  imports: [RouterLink],
  template: `
    @for (item of routes(); track $index) {
      @if (item != undefined) {
        <section>
          <a [routerLink]="item?.path">
            <img [src]="item?.largeImage" [alt]="item?.title" />
            <h2>{{ item?.title }}</h2>
            <p>{{ item?.description }}</p>
          </a>
        </section>
      }
    }
  `,
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent {
  routesRes = httpResource<RouteData[]>(() => '../../assets/routes.json', {
    defaultValue: [] as RouteData[]
  });
  routes = computed(() => {
    if (!this.routesRes.hasValue()) return [];
    return  this.routesRes.value().filter(route => !route.path.startsWith('/blog')).sort((a, b) => a.title.localeCompare(b.title));
  });
}

export interface RouteData {
  path: string;
  modulePath: string;
  gitFolder: string;
  title: string;
  largeImage: string;
  description: string;
}
