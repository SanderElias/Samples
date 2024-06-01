import { Component, QueryList, ViewChildren } from '@angular/core';
import { seAfterContentInit } from '@se-ng/observable-hooks';
import { map } from 'rxjs/operators';
import { IdDirective } from '../id.directive';
import { NgForOf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-directives-sample',
  templateUrl: './directives-sample.component.html',
  styles: [],
  standalone: true,
  imports: [IdDirective, NgForOf, AsyncPipe],
})
export class DirectivesSampleComponent extends seAfterContentInit() {
  @ViewChildren(IdDirective) ids!: QueryList<IdDirective>;

  ids$ = this.seAfterContentInit$.pipe(map(() => this.ids.map(idD => idD.id)));
}
