import {
  afterNextRender,
  afterRenderEffect,
  Component,
  DestroyRef,
  effect,
  inject,
  model,
  untracked,
  type WritableSignal,
} from '@angular/core';
import { StepDataService } from '../step-data.service';

@Component({
  selector: 'se-steps',
  imports: [],
  template: ` <ng-content /> `,
  styleUrl: './steps.component.css',
  providers: [StepDataService],
})
export class StepsComponent {
  sd = inject(StepDataService);
  selectedStepId = model(-1);

  // I really wished this would work
  // #dummy = syncSignals(this.selectedStepId, this.sd.selected)
  #dummy = afterRenderEffect(() => untracked(() => this.sd.select(this.selectedStepId())));
  #dummy1 = afterRenderEffect(() => {
    const newId = this.sd.selected();
    if (newId !== this.selectedStepId()) {
      untracked(() => this.selectedStepId.set(newId));
    }
  });
}

const syncSignals = <T = unknown>(a: WritableSignal<T>, b: WritableSignal<T>): void => {
  inject(DestroyRef).onDestroy(() => {
    refA.destroy();
    refB.destroy();
  });
  const update = (a: WritableSignal<T>, b: WritableSignal<T>) =>
    effect(() => {
      const x = a();
      if (x !== b()) {
        console.log('update', x);
        untracked(() => b.set(x));
      }
    });

  const refA = update(a, b);
  const refB = update(b, a);
};
