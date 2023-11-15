import { Component, ElementRef, HostListener, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, firstValueFrom } from 'rxjs';
import { take } from 'rxjs/operators';
import { Relation } from '../../relations.service';
import { NgIf, AsyncPipe } from '@angular/common';
import { pluck } from '../../../pluck';

@Component({
  selector: 'app-relation',
  template: `
    <h4 *ngIf="!detail">{{ (relation$ | async)?.name }}</h4>
    <section *ngIf="detail && relation$ | async as relation">
      <h4>{{ relation.name }}</h4>
      <p>{{ relation.company.name }}</p>
      <p>📧 {{ relation.email }}</p>
      <p>📱 {{ relation.phone }}</p>
    </section>
  `,
  styleUrls: ['./relation.component.css'],
  standalone: true,
  imports: [NgIf, AsyncPipe],
})
export class RelationComponent {
  elm = inject(ElementRef).nativeElement as HTMLElement;
  router = inject(Router);

  relation$ = new ReplaySubject<Relation>(1);
  @Input() set relation(relation: Relation) {
    this.relation$.next(relation);
  }

  detail = this.elm?.hasAttribute('detail'); // check if the attribute `detail` is present

  @HostListener('click') async onClick() {
    const relationId = await firstValueFrom(this.relation$.pipe(pluck('id'), take(1)));
    this.router.navigate(['/relations', relationId]);
  }
}
