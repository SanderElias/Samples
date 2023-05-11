import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RelationsService } from '../relations.service';
import { RelationComponent } from './relation/relation.component';

@Component({
  selector: 'app-b-relation-list',
  template: `
    <app-relation *ngFor="let rel of relations$|async" [relationId]='rel.id'><app-relation>

  `,
  styles: [],
  standalone: true,
  imports: [NgForOf, RelationComponent, AsyncPipe]
})
export class BRelationListComponent {
  rel = inject(RelationsService);
  relations$ = this.rel.relationList$.pipe(
    // tap(list => console.table(list))
  );

}
