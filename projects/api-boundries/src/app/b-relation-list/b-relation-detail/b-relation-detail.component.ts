import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { RelationsService } from '../../relations.service';
import { OrderRowComponent } from '../order-row/order-row.component';
import { RelationComponent } from '../relation/relation.component';
import { pluck } from '../../../pluck';

@Component({
  selector: 'app-relation-detail',
  template: `
  <ng-container *ngIf="relation$|async as relation">
    <app-relation [relationId]="relation.id" detail></app-relation>
    <h4>Orders:</h4>
    <app-order-row *ngFor="let orderId of relation.orders" [orderId]="orderId"></app-order-row>
  </ng-container>
  `,
  standalone: true,
  imports: [NgIf, RelationComponent, NgForOf, OrderRowComponent, AsyncPipe]
})
export class BRelationDetailComponent {
  relationId$ = inject(ActivatedRoute).params.pipe(pluck('id'));
  rel = inject(RelationsService);

  relation$ = this.relationId$.pipe(
    switchMap(id => this.rel.getRelation(id))
  );

}
