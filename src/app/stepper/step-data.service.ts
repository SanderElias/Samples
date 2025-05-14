import { computed, Injectable, Signal, signal, type WritableSignal } from '@angular/core';

@Injectable()
export class StepDataService {
  stepsMap = signal(new Map<number, Signal<StepData>>(), {
    equal: () => false
  });
  /** the currently selected step  */
  readonly selected = signal(-1);

  /** add a step */
  readonly register = (step: Signal<StepData>) =>
    this.stepsMap.update(x => {
      x.set(step().id, step);
      if (step().id === this.selected()) step().selected.set(true); // id was "pre-selected"
      return x;
    });

  /** remove a step */
  readonly unRegister = (step: Signal<StepData>) =>
    this.stepsMap.update(x => {
      x.delete(step().id);
      return x;
    });

  /**
   * select a different step
   *  updates the selected signal.
   *  updates the selected step to be selected.
   *  updates the old selected step to be unselected.
   */
  readonly select = (id?: number) => {
    const oldSelected = this.selected();
    if (!id || oldSelected === id) return; // no need to do anything
    const stepsMap = this.stepsMap();
    this.selected.set(id ?? -1);
    const old = stepsMap.get(oldSelected)?.();
    if (old) {
      old.selected.set(false);
    }
    const toSelect = stepsMap.get(id)?.();
    if (toSelect) {
      toSelect.selected.set(true);
    }
  };

  readonly getActive = computed(() => this.stepsMap().get(this.selected())?.());
}

export interface StepData {
  id: number;
  disabled: Signal<boolean>;
  selected: WritableSignal<boolean>;
  touched: WritableSignal<boolean>;
}
