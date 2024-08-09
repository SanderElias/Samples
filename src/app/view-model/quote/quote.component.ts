import { ChangeDetectionStrategy, Component, HostBinding, Input, input,OnInit } from '@angular/core';

import { Quote } from './quote.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'quote',
  templateUrl: './quote.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class QuoteComponent {
  /** use a hostbinding to add a class tot he host element */
  @HostBinding('class.z2') shadow = true;

  /** simple element, only respons to on incoming quote */
  quote = input<Quote | null>();
}
