import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RelationsService } from '../relations.service';
import { RelationComponent } from './relation/relation.component';
import { map, merge, mergeMap, startWith, tap } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-b-relation-list',
  template: `
    <section class="full-width">
      <input type="text" [formControl]="search" placeholder="🔎 Filter" />
    </section>
    <app-relation *ngFor="let rel of relations$ | async" [relationId]="rel.id" />
  `,
  styleUrls: ['./b-relation-list.css'],
  standalone: true,
  imports: [NgForOf, RelationComponent, AsyncPipe, ReactiveFormsModule],
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
