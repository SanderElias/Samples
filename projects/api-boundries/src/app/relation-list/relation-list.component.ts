import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { RelationsService } from '../relations.service';
import { RelationComponent } from './relation/relation.component';
import { NgForOf, AsyncPipe } from '@angular/common';

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
  relations$ = this.rel.relationList$.pipe(
    // tap(list => console.table(list))
  );


  constructor(private rel: RelationsService) { }


}
