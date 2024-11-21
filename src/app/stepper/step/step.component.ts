import { afterNextRender, booleanAttribute, Component, computed, inject, input, signal, untracked } from '@angular/core';
import { StepDataService, type StepData } from '../step-data.service';

@Component({
  selector: 'se-step',
  imports: [],
  template: ` <span class="circle"></span> <ng-content /> `,
  styleUrl: './step.component.css',
  host: {
    '[class.selected]': 'isSelected()',
    '[class.disabled]': 'disabled()',
    '(click)': 'select()',
  }
})
export class StepComponent {
  readonly stepId = input.required<number>();
  readonly sd = inject(StepDataService);
  readonly disabled = input(false, {transform: booleanAttribute});

  stepperData = computed(() => {
    const id = this.stepId();
    return untracked(
      () =>
        ({
          id,
          active: signal(true),
          selected: signal(false),
          disabled: this.disabled,
          touched: signal(false),
        }) as StepData
    );
  });

  isSelected = computed(() => this.stepperData().selected());

  #dummy = afterNextRender(() => {
    this.sd.register(this.stepperData);
  });

  protected select() {
    if (this.disabled()) return;
    this.stepperData().touched.set(true);
    this.sd.select(this.stepId());
  }
}
