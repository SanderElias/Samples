import {
  afterEveryRender,
  afterNextRender,
  booleanAttribute,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  signal,
  viewChild
} from '@angular/core';
import { deepEqual } from '@se-ng/signal-utils';

/**
 * this component places an invisible overlay over the parent element, so it can
 * intercept clicks. When a users clicks on the overlay, a modal dialog is shown with the content of the component.
 * When the user clicks the confirm button, the original event is replayed on the parent element.
 * There are two buttons, one for confirming and one for canceling.
 * Also there is a lightDismiss option, which allows the dialog to be closed by clicking on its backdro[]
 *   [lightDismiss] inputs sets the lightDismiss option.
 *
 * You can set the text of the buttons:
 *  the [confirmText] inputs sets the text of the confirm button.
 *  the [cancelText] inputs sets the text of the cancel button.
 *
 */
@Component({
  selector: 'confirm-it',
  imports: [],
  template: `<dialog #dialog>
    @if (!hidden()) {
      <ng-content></ng-content>
      <footer>
        <button type="button" (click)="close(false)">{{ cancelText() }}</button>
        <button type="button" (click)="close(true)">{{ confirmText() }}</button>
      </footer>
    }
  </dialog> `,
  styleUrl: './confirm-it.component.css',
  host: {
    '(click)': 'captureClick($event)',
    '[style]': 'styleOverlay()'
  }
})
export class ConfirmItComponent {
  confirmText = input('yes');
  cancelText = input('no');
  lightDismiss = input(false, { transform: booleanAttribute });
  private dlg = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private elm: ElementRef<HTMLDivElement> = inject(ElementRef);
  private parent = this.elm.nativeElement.parentElement!;
  private originalEvent: MouseEvent | undefined;
  // note we use the deepEqual here to avoid excessive dom updates.
  private parentBox = signal({ top: 0, left: 0, width: 0, height: 0, zIndex: 1 }, { equal: deepEqual });
  // we need to update the overlay when the parent box changes.
  // because of that, this only runs if there is indeed a new position
  protected styleOverlay = computed(
    () =>
      `top: ${this.parentBox().top}px;
       left: ${this.parentBox().left}px;
       width: ${this.parentBox().width}px;
       height: ${this.parentBox().height}px;
       z-index: ${this.parentBox().zIndex};`
  );
  // make sure nothing of the content can "leak" into view before it is needed.
  protected hidden = signal(true);

  _ = afterEveryRender({
    read: () => {
      const parentRect = this.parent.getBoundingClientRect();
      // @ts-expect-error // TS doen't know about computedStyleMap.get(x).value apparently.
      const zIndex = this.parent.computedStyleMap().get('z-index')?.value;
      // on each render we need to update the parent box.
      // this is needed because the parent can be moved around.
      this.parentBox.set({
        top: parentRect.top,
        left: parentRect.left,
        width: parentRect.width,
        height: parentRect.height,
        zIndex: zIndex === 'auto' ? 1 : Number(zIndex) + 1
      });
    }
  });

  close = (confirmed: boolean) => {
    const dialog = this.dlg().nativeElement;
    if (confirmed) {
      // replay the original event.
      this.parent.dispatchEvent(this.originalEvent!);
    }
    this.hidden.set(true); // hide the dialog content
    dialog.close();
  };

  captureClick(ev: MouseEvent) {
    const target = ev.target as HTMLElement;
    // prevent all events from bubbling up.
    ev.preventDefault();
    ev.stopPropagation();
    if (target !== this.elm.nativeElement) {
      // if the target is not the element itself, it means its a child element.
      // this is needed to prevent the dialog from closing when clicking on a child element.
      // (anything inside the dialog and the projected content)
      return;
    }
    const dialog = this.dlg().nativeElement;
    this.originalEvent = ev; // keep the "original" event
    if (this.lightDismiss()) {
      // if the lightDismiss is set, we need to close the dialog when clicking on the backdrop.
      dialog.addEventListener('click', e => {
        ev.preventDefault();
        if (e.target === dialog) {
          // if the target is the dialog itself, we need to close it.
          dialog.close();
          this.hidden.set(true);
        }
      });
    }
    this.hidden.set(false);
    dialog.showModal();
  }

}
