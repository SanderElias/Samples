import {
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
  ViewEncapsulation,
  effect,
  ChangeDetectionStrategy,
  afterRenderEffect
} from '@angular/core';
import { Control, customError, form, submit, type Field } from '@angular/forms/signals';
import { isObject } from '@se-ng/signal-utils';
import { flattenRecord } from '../crud-stuff/utils/flatten-record';
import { ContactsComponent } from './contacts/contacts.component';
import { TagsComponent } from './tags/tags.component';
import { SampleDataService } from './util/sample-data.service';
import { showErrorsInDom } from './util/show-errors-in-dom.directive';
import { sampleDataValidationSchema } from './validations/sampledata-validation';
import { InputRandomIntComponent } from './input-random-int/input-random-int.component';

@Component({
  imports: [Control, TagsComponent, ContactsComponent,  InputRandomIntComponent],
  template: `
    <h1>Signal Forms Experiment <small><a href="/signalForms/tree">recusive form</a></small></h1>
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
      <label for="favoriteRandomInt">
        <span>Favorite Random Int</span>
        <se-input-random-int name="favoriteRandomInt" [control]="fd.favoriteRandomInt"  />
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
        <label for="zip">
          <span>Zip</span>
          <input type="text" name="zip" placeholder="Zip" [control]="fd.address.zip" showError />
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
    <dialog #dlg>Submitting and validating on the server, please hold!</dialog>
  `,
  styleUrl: './signal-forms-experiment.component.css',
  // I use global styles for this component to make sure the styles are applied to the form elements inside the child components
  // there are other ways to do this, but this is the simplest for this sample
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalFormsExperimentComponent {
  dataService = inject(SampleDataService);
  id = signal('1');
  relation = this.dataService.getById(this.id);
  fd = form(this.relation, sampleDataValidationSchema);

  dlg = viewChild('dlg', { read: ElementRef });

  constructor() {
    afterRenderEffect(() => {
      const d = this.dlg()?.nativeElement as HTMLDialogElement;
      if (this.fd().submitting()) {
        d.showModal();
      } else {
        d.close();
      }
    });
  }

  async onSubmit(ev: Event) {
    ev.preventDefault();

    if (this.fd().valid()) {
      if (Math.random() < 0.6) {
        const r = await submit(this.fd, randomError);
        console.log('submit result', r);
      } else {
        console.log('submit without error', JSON.stringify(this.fd().value(), undefined, 2));
      }
    }
  }
}

const randomError = async (form: Field<unknown>) => {
  // mimicking a slow server response
  console.log('submit with error');
  // instead of just waiting a few seconds, it is probably a good idea to send the data
  // to the server and wait for the response
  await new Promise(resolve => setTimeout(resolve, 3000));
  const data = form().value(); // get the current value of the form
  if (isObject(data)) {
    const fieldNames = Object.keys(flattenRecord(data)); // flatten the object to get all field names
    // pick a random field name
    const randomField = fieldNames[Math.ceil(Math.random() * fieldNames.length)].split('.');
    try {
      // sometimes the random field is not a valid field, so we need to catch the error
      const field = randomField.reduce((f, key) => {
        return f[key] ?? f;
      }, form);
      console.log('random field with error', randomField.join('.'));

      return customError({
        kind: 'randomError',
        message: 'This is a random error for testing purposes',
        field
      });
    } catch {
      return null;
    }
  }
};
