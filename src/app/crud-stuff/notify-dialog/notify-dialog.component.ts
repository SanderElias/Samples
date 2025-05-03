import { afterRenderEffect, Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { NotifyDialogService } from './notify-dialog.service';
import { trace } from 'console';

@Component({
  selector: 'se-notify-dialog',
  imports: [],
  template: `
    <dialog #dlg>
      <div>
        <header>
          <h3>{{ nds.title() }}</h3>
        </header>
        <section>
          {{nds.message()}}
        </section>
        <ng-content />
        <footer>
          <button (click)="nds.close()">{{ nds.dismissButtonText() }}</button>
        </footer>
      </div>
    </dialog>
  `,
  styleUrl: './notify-dialog.component.css',
  host: {
    '(click)': 'onClick($event)',
  },
})
export class NotifyDialogComponent {
  lightDismiss = input(true);
  nds = inject(NotifyDialogService);
  dlg = viewChild.required<ElementRef<HTMLDialogElement>>('dlg');

  _ = afterRenderEffect(() => {
    const elm = this.dlg().nativeElement;
    const shown = this.nds.shown();
    if (shown) {
      elm.showModal();
    } else {
      elm.close();
    }
  });

  onClick(ev: MouseEvent) {
    if (!this.lightDismiss()) return;
    const target = ev.target as HTMLElement;
    console.log(target.tagName)
    if (target.tagName.toLowerCase()==='dialog') {
      // its an click on the backdrop, as the
      // content is inside a div-wrapper
      this.nds.close();
    }
  }
}
