import { Component } from '@angular/core';
import { DigitInputComponent } from './digit-input/digit-input.component';
import { DigitsComponent } from './digits/digits.component';

@Component({
  selector: 'se-custom-native-form',
  imports: [DigitInputComponent, DigitsComponent],
  template: `
    <h1>custom-native-form sample!</h1>
    <form (submit)="submit($event)">
      <label for="name">
        <span>Name:</span>
        <input type="text" id="name" name="name" required value="sander" />
      </label>
      <label for="email">
        <span>Email:</span>
        <input type="email" id="email" name="email" required value="sander@email.com" />
      </label>
      <label for="code">
        <span>Code:</span>
        <digit-input name="code" value="0123" digits="7" />
      </label>
      <label for="code1">
        <span>Code-1:</span>
        <se-digits name="code1" value="012" digits="3" />
      </label>
      <label>
        <span></span>
        <input type="submit" value="Submit" />
      </label>
    </form>
    <div #div>
      data-thingie

      <button (click)="invalidate($event)">invalidate</button>
    </div>
    <style>
      div {
        padding: var(--size2);
        color: green;
        width: 10rem;
        margin: 1rem;
        padding: 0.5rem;
        border: 1px solid green;
      }
      div:user-invalid {
        color: red;
        border: 1px solid red;
      }
    </style>
  `,
  styleUrl: './custom-native-form.component.css'
})
export class CustomNativeFormComponent {
  submit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form) as any;
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    // const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', formData);
  }

  invalidate(event: MouseEvent) {
    const elm = event?.target as HTMLButtonElement;
    const div = elm?.closest('div');
    // @ts-ignore
    div?.state.add('user-invalid', 'true');
    console.log('div', div);
  }
}
