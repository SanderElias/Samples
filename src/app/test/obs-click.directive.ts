import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '👁-click',
})
export class ObsClickDirective {
  @Input('👁-click') set click(x) {
    console.log('clic testup', x);
  }

  constructor() {
    console.log('{click} constructed');
  }
}
