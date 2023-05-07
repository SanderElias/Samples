import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { pluck, take } from 'rxjs/operators';
import { Relation } from '../../relations.service';
import { NgIf, AsyncPipe } from '@angular/common';

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
    styleUrls: ['./relation.component.css'],
    standalone: true,
    imports: [NgIf, AsyncPipe]
})
export class RelationComponent {
  relation$ = new ReplaySubject<Relation>(1);
  @Input() set relation(relation: Relation) { this.relation$.next(relation); }

  detail = this.elmRef.nativeElement?.hasAttribute('detail');

  @HostListener('click') async onClick() {
    const relationId = await this.relation$.pipe(pluck('id'), take(1)).toPromise();
    this.router.navigate(['/relations', relationId]);
  }

  constructor(
    private elmRef: ElementRef<HTMLElement>,
    private router: Router,
  ) { }


}
