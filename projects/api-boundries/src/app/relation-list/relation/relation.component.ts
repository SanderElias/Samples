import { AsyncPipe } from '@angular/common';
import { Component, ElementRef, HostListener, Input, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, firstValueFrom } from 'rxjs';
import { take } from 'rxjs/operators';
import { pluck } from '../../../pluck';
import { Relation } from '../../relations.service';

@Component({
    selector: 'app-relation',
    template: `
    @if (!detail()) {
      <h4>{{ (relation$ | async)?.name }}</h4>
    } @else {
      @if (relation$ | async; as relation) {
        <section>
          <h4>{{ relation.name }}</h4>
          <p>{{ relation.company.name }}</p>
          <p>📧 {{ relation.email }}</p>
          <p>📱 {{ relation.phone }}</p>
        </section>
      }
    }
  `,
    styleUrls: ['./relation.component.css'],
    imports: [AsyncPipe],
    host: {
        '[detail]': '$detail',
    }
})
export class RelationComponent {
  elm = inject(ElementRef).nativeElement as HTMLElement;
  router = inject(Router);

  relation$ = new ReplaySubject<Relation>(1);
  @Input() set relation(relation: Relation) {
    this.relation$.next(relation);
  }

  detail = signal(false); // check if the attribute `detail` is present

  @HostListener('click') async onClick() {
    const relationId = await firstValueFrom(this.relation$.pipe(pluck('id'), take(1)));
    this.router.navigate(['/relations', relationId]);
  }
}
