import { Component, OnInit } from '@angular/core';
import { RelationsService } from '../relations.service';

@Component({
  selector: 'app-b-relation-list',
  template: `
    <app-relation *ngFor="let rel of relations$|async" [relationId]='rel.id'><app-relation>

  `,
  styles: [
  ]
})
export class BRelationListComponent {
  relations$ = this.rel.relationList$.pipe(
    // tap(list => console.table(list))
  );


  constructor(private rel: RelationsService) { }

}
