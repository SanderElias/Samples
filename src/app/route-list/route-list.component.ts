import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

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
  #http = inject(HttpClient);
  routes = toSignal(this.#http.get<RouteData[]>('../../assets/routes.json'));
}

export interface RouteData {
  path: string;
  modulePath: string;
  gitFolder: string;
  title: string;
  largeImage: string;
  description: string;
}
