import { ChangeDetectionStrategy, Component, computed, HostBinding, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'painting',
  templateUrl: './painting.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PaintingComponent {
  #san = inject(DomSanitizer);
  /** Add an class to the host */
  @HostBinding('class.z2') shadow = true;

  art = input<string|null>();

  url = computed(() => this.#san.bypassSecurityTrustStyle(this.art() ?? ''));

}
