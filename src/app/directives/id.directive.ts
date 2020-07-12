import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[id]',
})
export class IdDirective {
  @Input() id: string;
}
