import { AsyncPipe, NgIf } from '@angular/common';
import { Component, ElementRef, HostListener, Input, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ReplaySubject, firstValueFrom } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { RelationsService } from '../../relations.service';

@Component({
  selector: 'app-relation',
  template: `
    @if (!detail) {
      <h4><img [src]="relation()?.avatar" /> {{ relation()?.name }}</h4>
    }
    @if (detail) {
      <section>
        <h4>{{ relation()?.name }}</h4>
        <p>{{ relation()?.company?.name }}</p>
        <p>📧 {{ relation()?.email }}</p>
        <p>📱 {{ relation()?.phone }}</p>
      </section>
    }
  `,
  styleUrls: ['./relation.component.css'],
  standalone: true,
  imports: [NgIf, AsyncPipe],
})
export class RelationComponent {
  rel = inject(RelationsService);
  elm = inject(ElementRef).nativeElement as HTMLElement;
  router = inject(Router);

  private relationId$ = new ReplaySubject<string>(1);
  @Input() set relationId(x: string) {
    this.relationId$.next(x);
  }

  detail = this.elm?.hasAttribute('detail'); // check if the attribute `detail` is present

  @HostListener('click') async onClick() {
    const relationId = await firstValueFrom(this.relationId$.pipe(take(1)));
    this.router.navigate(['/bRelations', relationId]);
  }

  relation = toSignal(this.relationId$.pipe(switchMap(id => this.rel.getRelation(id))));
}
