import { Component, signal } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { DummyContentComponent } from './dummy-content/dummy-content.component';

@Component({
  selector: 'se-reusable-dialog',
  imports: [DialogComponent, DummyContentComponent],
  template: `<h1>Reusable Dialog</h1>
    <button #b (click)="show.set(true)">Open Dialog</button>
    <label
      >input to show inert state
      <input type="text" name="dummy" id="dummy" />
    </label>
    <dialog [show]="show()">
      @defer (when show()) {
        <h2>Dialog</h2>
        <se-dummy-content />
        <button (click)="show.set(false)">Close</button>
      } @placeholder {
        <p>Some content</p>
      }
    </dialog> `,
  styleUrl: './reusable-dialog.component.css',
})
export class ReusableDialogComponent {
  show = signal(false);
}

type x = 'een' | 'twee' | 'drie';
const y = 'twee';

function test<T extends string>(x: MustBeStringUnion<T>) {}

type MustBeStringUnion<T> = T extends string ? (string extends T ? never : T) : T;

test<x>(y);
