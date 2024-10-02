import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RelationsService } from '../relations.service';
import { RelationComponent } from './relation/relation.component';

@Component({
  selector: 'app-relation-list',
  template: `
    @for (rel of relations$ | async; track rel) {
      <app-relation [relation]="rel" />
    }
  `,
  styles: [],
  standalone: true,
  imports: [RelationComponent, AsyncPipe],
})
export class RelationListComponent {
  rel = inject(RelationsService);
  relations$ = this.rel.relationList$
    .pipe
    // tap(list => console.table(list))
    ();
}
