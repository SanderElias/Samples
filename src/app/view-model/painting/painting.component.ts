import {
  Component,
  HostBinding,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'painting',
  templateUrl: './painting.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaintingComponent {
  /** Add an class to the host */
  @HostBinding('class.z2') shadow = true;

  url: SafeStyle;

  /** use an setter, to make sure I can render this */
  @Input() set art(l: string) {
    if (l) {
      this.url = this.san.bypassSecurityTrustStyle(l);
    }
  }

  constructor(private san: DomSanitizer) {}
}
