import { afterRenderEffect, Component, ElementRef, inject, model } from '@angular/core';

@Component({
  selector: 'se-dialog',
  imports: [],
  template: ` <dialog><ng-content></ng-content></dialog> `,
  styleUrls: ['./dialog.component.css']
})
export class SeDialogComponent {
  readonly shown = model.required<boolean>();
  elm = inject(ElementRef).nativeElement as HTMLElement;

  _ = afterRenderEffect(() => {
    const dlg = this.elm.firstElementChild as HTMLDialogElement;
    if (this.shown()) {
      dlg.showModal();
    } else {
      dlg.close();
    }
  });
}
