import { ChangeDetectionStrategy, Component, computed, effect, inject, Injectable, signal } from '@angular/core';

@Component({
  selector: 'se-symbols-form',
  imports: [],
  template: `
    <h3>Symbol Form for "{{ fullName() }}"</h3>
    <label
      >First Name
      <input type="text" [value]="vm().firstName()" (input)="vm().firstName.set($any($event).target.value)" />
    </label>
    <label
      >Last Name
      <input type="text" [value]="vm().lastName()" (input)="vm().lastName.set($any($event).target.value)" />
    </label>
  `,
  styleUrls: ['./signals-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsFormsComponent {
  fullName = inject(SignalsFormSampleService).fullName;
  vm = inject(SignalsFormSampleService).vm;
}

@Injectable({
  providedIn: 'root'
})
export class SignalsFormSampleService {
  readonly vm = signal({
    firstName: signal('Sander'),
    lastName: signal('Elias')
  });

  readonly fullName = computed(() => `${this.vm().firstName()} ${this.vm().lastName()}`.trim());

  constructor() {
    effect(() => {
      console.log(`full name: "${this.fullName()}"`);
    });
  }
}
