import { CommonModule } from '@angular/common';
import { Component, EffectCleanupFn, ElementRef, Injector, Input, WritableSignal, afterNextRender, effect, inject } from '@angular/core';

@Component({
  selector: 'se-dialog',
  standalone: true,
  imports: [CommonModule],
  template: ` <dialog><ng-content></ng-content></dialog> `,
  styleUrls: ['./dialog.component.css'],
})
export class SeDialogComponent {
  @Input({ required: true }) shown!: WritableSignal<boolean>;
  elm = inject(ElementRef).nativeElement as HTMLElement;

  constructor() {
    afterNextRenderEffect(() => {
      const dlg = this.elm.querySelector('dialog') as HTMLDialogElement;
      if (this.shown()) {
        dlg.showModal();
      } else {
        dlg.close();
      }
    });
  }
}

// added those types as those seem not te be exported by angular!
/**
 * A callback passed to the effect function that makes it possible to register cleanup logic.
 */
export type EffectCleanupRegisterFn = (cleanupFn: EffectCleanupFn) => void;

function afterNextRenderEffect(fn:  (onCleanup: EffectCleanupRegisterFn) => void) {
  const injector = inject(Injector);
  afterNextRender(() => effect(fn , { injector }));
}
