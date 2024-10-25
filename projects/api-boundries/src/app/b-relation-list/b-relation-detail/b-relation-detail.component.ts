import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { pluck } from '../../../pluck';
import { RelationsService } from '../../relations.service';
import { OrderRowComponent } from '../order-row/order-row.component';
import { RelationComponent } from '../relation/relation.component';

@Component({
    selector: 'app-relation-detail',
    template: `
    @if (relation$ | async; as relation) {
      <app-relation [relationId]="relation.id" detail></app-relation>
      <h4>Orders:</h4>
      @for (orderId of relation.orders; track orderId) {
        <app-order-row [orderId]="orderId"></app-order-row>
      }
    }
  `,
    imports: [RelationComponent, OrderRowComponent, AsyncPipe]
})
export class BRelationDetailComponent {
  relationId$ = inject(ActivatedRoute).params.pipe(pluck('id'));
  rel = inject(RelationsService);

  relation$ = this.relationId$.pipe(switchMap(id => this.rel.getRelation(id)));
}
