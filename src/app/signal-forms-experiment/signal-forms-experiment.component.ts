import { afterRenderEffect, Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { Control, form, required, min, max, validate } from '@angular/forms/signals';
import { SampleDataService } from './util/sample-data.service';
import { TagsComponent } from './tags/tags.component';
import { ContactsComponent } from './contacts/contacts.component';
import { sampleDataValidationSchema } from './validations/sampledata-validation';
import { showErrorsInDom } from './util/shiw-errors-in-dom.directive';
import { ThisReceiver } from '@angular/compiler';

@Component({
  imports: [Control, TagsComponent, ContactsComponent, showErrorsInDom],
  template: `
    <h1>Signal Forms Experiment</h1>
    <form (submit)="onSubmit($event)">
      <label for="name">
        <span>Name</span>
        <input type="text" name="name" placeholder="Your name" [control]="fd.name" showError />
      </label>
      <label for="dob">
        <span>Date of Birth</span>
        <input type="date" name="dob" [control]="fd.dob" showError />
      </label>
      <label for="password">
        <span>Password</span>
        <input type="password" name="password" placeholder="Password" [control]="fd.password" showError />
      </label>
      <label for="confirm">
        <span>Confirm Password</span>
        <input type="password" name="confirm" placeholder="Confirm Password" [control]="fd.confirm" showError />
      </label>
      <!-- use the contacts component to iter over the contacts -->
      <fieldset [contacts]="fd.contacts"></fieldset>

      <fieldset>
        <legend>Address</legend>
        <label for="street">
          <span>Street</span>
          <input type="text" name="street" placeholder="Street" [control]="fd.address.street" showError />
        </label>
        <label for="city">
          <span>City</span>
          <input type="text" name="city" placeholder="City" [control]="fd.address.city" showError />
        </label>
        <label for="state">
          <span>State</span>
          <input type="text" name="state" placeholder="State" [control]="fd.address.state" showError />
        </label>
      </fieldset>
      <!-- use the tags component to iter over the tags -->
      <fieldset [tags]="fd.tags"></fieldset>
      <button type="submit" [disabled]="!fd().valid()">Submit</button>
    </form>
  `,
  styleUrl: './signal-forms-experiment.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SignalFormsExperimentComponent {
  dataService = inject(SampleDataService);
  id = signal('1');
  relation = this.dataService.getById(this.id);
  fd = form(this.relation, sampleDataValidationSchema);

  onSubmit(ev: Event) {
    if (this.fd().valid()) {
      // probably want to save the data here.
      console.log('submit', JSON.stringify(this.relation(), undefined, 2));
    }
    ev.preventDefault();
  }
}
