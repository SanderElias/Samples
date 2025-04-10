import { Component } from '@angular/core';
import { DigitInputComponent } from './digit-input/digit-input.component';

@Component({
  selector: 'se-custom-native-form',
  imports: [DigitInputComponent],
  template: `
    <h1>custom-native-form sample!</h1>
    <form (submit)="submit($event)">
      <label for="name">
        <span>Name:</span>
        <input type="text" id="name" name="name" required value='sander'/>
      </label>
      <label for="email">
        <span>Email:</span>
        <input type="email" id="email" name="email" required value='sander@email.com'/>
      </label>
      <label for="code">
        <span>Code:</span>
        <digit-input name="code" value='0d24'/>
      </label>
      <label>
        <span></span>
        <input type="submit" value="Submit" />
      </label>
    </form>
  `,
  styleUrl: './custom-native-form.component.css',
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
}
