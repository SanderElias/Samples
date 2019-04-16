import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { IdDirective } from '../id.directive';
import { tap, mergeMap, map } from 'rxjs/operators';
import { seAfterContentInit$ } from '@se-ng/observable-hooks/bundles/se-ng-observable-hooks.umd';

@Component({
  selector: 'app-directives-sample',
  templateUrl: './directives-sample.component.html',
  styles: []
})
export class DirectivesSampleComponent extends seAfterContentInit$() {
  @ViewChildren(IdDirective) ids: QueryList<IdDirective>;

  ids$ = this.seAfterContentInit$.pipe(
    map(() => this.ids.map(idD => idD.id)),
  );
}
