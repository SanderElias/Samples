import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { RelationsService } from '../relations.service';

@Component({
  selector: 'app-relation-list',
  template: `
    <app-relation *ngFor="let rel of relations$|async" [relation]='rel'><app-relation>

  `,
  styles: [
  ]
})
export class RelationListComponent {
  relations$ = this.rel.relationList$.pipe(
    // tap(list => console.table(list))
  );


  constructor(private rel: RelationsService) { }


}
