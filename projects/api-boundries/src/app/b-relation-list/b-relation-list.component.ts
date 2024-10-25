import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map, mergeMap, startWith, tap } from 'rxjs';
import { RelationsService } from '../relations.service';
import { RelationComponent } from './relation/relation.component';

@Component({
    selector: 'app-b-relation-list',
    template: `
    <section class="full-width">
      <input type="text" [formControl]="search" placeholder="🔎 Filter" />
    </section>
    @for (rel of relations$ | async; track rel) {
      <app-relation [relationId]="rel.id" />
    }
  `,
    styleUrls: ['./b-relation-list.css'],
    imports: [RelationComponent, AsyncPipe, ReactiveFormsModule]
})
export class BRelationListComponent {
  rel = inject(RelationsService);

  search = new FormControl('');
  relations$ = this.rel.relationList$.pipe(
    mergeMap(list =>
      this.search.valueChanges.pipe(
        startWith(''),
        map(search =>
          search === null || search === '' ? list : list.filter(rel => rel.name.toLowerCase().includes(search.toLowerCase()))
        )
      )
    ),
    tap(list => console.table(list))
  );
}
