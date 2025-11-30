import { JsonPipe } from '@angular/common';
import { Component, effect,signal } from '@angular/core';

import { InputHostComponent } from './input-host/input-host.component';

@Component({
  selector: 'se-input-host-experiment',
  imports: [InputHostComponent, JsonPipe],
  template: `<h1>Input Host Experiment</h1>
    <p>This component is used to experiment with using input as a host. Don't try this in production!</p>
    <form (submit)="log($event)">
      @let error1 = inp1.error();
      @if (error1 && error1.length  ) {
        <p class="error">Error: {{   error1 }}</p>
      }
      <input experiment type="text" [(value)]="value" required #inp1/>
      <input experiment type="text" [(value)]="value" required />
      <input experiment type="password" [(value)]="value" required />

      <input type="submit" value="Submit" />
    </form>
    <code>
      <pre>{{ inp1 | json }}</pre>
    </code>`,
  styleUrl: './input-host-experiment.component.css'
})
export class InputHostExperimentComponent {
  value = signal('Hello World');

  _ = effect(() => {
    console.log('Input value changed:', this.value());
  });

  log(event: Event) {
    event.preventDefault();
    console.log('Form submitted with value:', this.value());
  }
}
