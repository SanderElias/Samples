import { CommonModule } from '@angular/common';
import { Component, ElementRef, Injector, Input, WritableSignal, afterNextRender, effect, inject } from '@angular/core';

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

function afterNextRenderEffect(fn: Function) {
  const injector = inject(Injector);
  afterNextRender(() => effect(fn as any, { injector }));
}
