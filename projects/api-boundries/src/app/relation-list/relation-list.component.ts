import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RelationsService } from '../relations.service';
import { RelationComponent } from './relation/relation.component';

@Component({
  selector: 'app-relation-list',
  template: `
    <app-relation *ngFor="let rel of relations$|async" [relation]='rel'><app-relation>

  `,
  styles: [],
  standalone: true,
  imports: [NgForOf, RelationComponent, AsyncPipe]
})
export class RelationListComponent {
  rel = inject(RelationsService);
  relations$ = this.rel.relationList$.pipe(
    // tap(list => console.table(list))
  );

}
