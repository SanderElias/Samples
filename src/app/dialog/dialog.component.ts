import { Component, signal } from '@angular/core';

import { SeDialogComponent } from './dialog/dialog.component';

@Component({
  imports: [SeDialogComponent],
  template: `<H1>Dialog doesn't need a service</H1>
    <button (click)="shown.set(!shown())">{{ shown() ? 'hide' : 'show' }}</button>
    <se-dialog [shown]="shown()">
      <p>This modal dialog has a groovy backdrop!</p>
      <button autofocus (click)="shown.set(false)">Close</button>
    </se-dialog> `,
  styleUrls: ['./dialog.component.css']
})
export default class DialogComponent {
  shown = signal(false);
}
