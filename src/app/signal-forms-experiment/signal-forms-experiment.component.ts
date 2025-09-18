import { afterRenderEffect, Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { Control, form, required, min, max, validate } from '@angular/forms/signals';
import { SampleDataService } from './sample-data.service';
import { TagsComponent } from './tags/tags.component';
import { ContactsComponent } from './contacts/contacts.component';
import { sampleDataValidationSchema } from './sampledata-validation';
import { UpdateNativeErrorsDirective } from './update-native-errors.directive';

@Component({
  imports: [Control, TagsComponent, ContactsComponent, UpdateNativeErrorsDirective],
  template: `
    <h1>Signal Forms Experiment</h1>
    all valid: {{ fd().valid() }} <br />
    <form (submit)="onSubmit($event)">
      <label for="name">
        <span>Name</span>
        <input type="text" name="name" placeholder="Your name" [control]="fd.name" showError />
      </label>
      <label for="dob">
        <span>Date of Birth</span>
        <input type="date" name="dob" [control]="fd.dob"  showError />
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
    console.log('submit', this.fd);
    ev.preventDefault();
  }

  _ = afterRenderEffect(() => {
    // console.log('form data', JSON.stringify(this.relation(), null, 2));
    console.log(this.fd().errors());
  });
}
