import { afterRender, Component, computed, ElementRef, inject, input, viewChild, signal, afterRenderEffect } from '@angular/core';
import { deepEqual } from '@se-ng/signal-utils';

@Component({
  selector: 'confirm-it',
  imports: [],
  template: `<dialog #dialog>
    <ng-content></ng-content>
    <footer>
      <button type="button" (click)="close(false)">{{ cancelText() }}</button>
      <button type="button" (click)="close(true)">{{ confirmText() }}</button>
    </footer>
  </dialog> `,
  styleUrl: './confirm-it.component.css',
  host: {
    '(click)': 'onClick($event)',
  },
})
export class ConfirmItComponent {
  confirmText = input('yes');
  cancelText = input('no');
  private dlg = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private elm: ElementRef<HTMLDivElement> = inject(ElementRef);
  private parent = this.elm.nativeElement.parentElement!;
  private originalEvent: MouseEvent | undefined;
  private parentBox = signal({ top: 0, left: 0, width: 0, height: 0 }, { equal: deepEqual });

  _0 = afterRender({
    read: () => {
      const parentRect = this.parent.getBoundingClientRect();
      // on each render we need to update the parent box.
      // this is needed because the parent can be moved around.
      this.parentBox.set({
        top: parentRect.top,
        left: parentRect.left,
        width: parentRect.width,
        height: parentRect.height,
      });
    },
  });

  _1 = afterRenderEffect(() => {
    const box = this.parentBox();
    // we need to update the cover when the parent box changes.
    // note we use the deepEqual there to avoid excessive updates.
    // because of that, this only runs if there is indeed a new position
    const elm = this.elm.nativeElement;
    const parent = this.parent;
    // make sure the cover is on top of the parent.
    elm.style['z-index'] = parent.style['z-index'] + 1 || '999999';
    elm.style.top = box.top + 'px';
    elm.style.left = box.left + 'px';
    elm.style.width = box.width + 'px';
    elm.style.height = box.height + 'px';
  });

  close = (confirmed: boolean) => {
    const dialog = this.dlg().nativeElement;
    if (confirmed) {
      // replay the original event.
      this.parent.dispatchEvent(this.originalEvent!);
    }
    dialog.close();
  };

  onClick(ev: MouseEvent) {
    const target = ev.target as HTMLElement;
    // prevent all events from bubbling up.
    ev.preventDefault();
    ev.stopPropagation();
    if (target !== this.elm.nativeElement) {
      // if the target is not the element itself, it means its a child element.
      return;
    }
    this.originalEvent = ev; // keep the "original" event
    const dialog = this.dlg().nativeElement;
    dialog.showModal();
  }
}
