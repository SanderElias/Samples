import { afterRenderEffect, Component, ElementRef, inject, input } from '@angular/core';

@Component({
  selector: 'dialog',
  imports: [],
  template: `<ng-content />`,
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  elm = inject(ElementRef).nativeElement as HTMLDialogElement
  show = input(false);

  #dummy = afterRenderEffect(() => {
    if (this.show()) {
      this.elm.showModal();
    } else {
      this.elm.close();
    }
  })
}
