import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[my-click]',
  standalone: true,
})
export class ObsClickDirective {
  @Input('my-click') set click(x) {
    console.log('click testup', x);
  }

  constructor() {
    console.log('{click} constructed');
  }
}
