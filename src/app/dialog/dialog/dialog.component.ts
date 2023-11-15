import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  WritableSignal,
  inject
} from '@angular/core';
import { afterNextRenderEffect } from '../../../utils/signal-helpers';

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
      const dlg = this.elm.firstElementChild as HTMLDialogElement;
      if (this.shown()) {
        dlg.showModal();
      } else {
        dlg.close();
      }
    });
  }
}


