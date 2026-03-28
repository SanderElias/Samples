import { afterNextRender, ChangeDetectionStrategy, Component, model, viewChild } from '@angular/core';

@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class ModalDemoComponent {
  modal = viewChild<HTMLDivElement>('modal');
  shown = model(false);

  #_ = afterNextRender(() => setTimeout(() => this.shown.set(true), 1500));
}
