import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input
} from '@angular/core';

@Component({
  selector: 'app-wait-for-it',
  templateUrl: './wait-for-it.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class WaitForItComponent {
  someVar = input<string[] | undefined>();
  prop1 = input<string>('');
  prop2 = input<string>('');
  prop3 = input<string>('');

  #collectedProps = computed(() => {
    const createProp = (propName: string, value: string) =>
      value ? { propName, value } : undefined;
    return [
      createProp('prop1', this.prop1()),
      createProp('prop2', this.prop2()),
      createProp('prop3', this.prop3())
    ].filter(p => !!p);
  });

  requiredProps = computed(() => this.#collectedProps());

  goodToGo = computed(() => {
    const props = this.#collectedProps();
    return props.length === 3 ? props : undefined;
  });
}
