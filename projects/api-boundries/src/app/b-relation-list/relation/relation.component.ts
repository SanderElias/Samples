import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { RelationsService } from '../../relations.service';

@Component({
  selector: 'app-relation',
  template: `
    <h4 *ngIf="!detail">{{ (relation$|async)?.name }}</h4>
    <section *ngIf="detail && relation$|async as relation">
      <h4>{{ relation.name }}</h4>
      <p>{{ relation.company.name }}</p>
      <p>📧 {{ relation.email }}</p>
      <p>📱 {{ relation.phone }}</p>
    </section>
  `,
  styleUrls: ['./relation.component.css']
})
export class RelationComponent {
  private relationId$ = new ReplaySubject<string>(1);
  @Input() set relationId(x: string) { this.relationId$.next(x); };

  detail = this.elmRef.nativeElement?.hasAttribute('detail');

  @HostListener('click') async onClick() {
    const relationId = await this.relationId$.pipe(take(1)).toPromise();
    this.router.navigate(['/bRelations', relationId]);
  }

  relation$ = this.relationId$.pipe(
    switchMap(id => this.rel.getRelation(id)),
  );

  constructor(
    private elmRef: ElementRef<HTMLElement>,
    private rel: RelationsService,
    private router: Router,
  ) { }

}

