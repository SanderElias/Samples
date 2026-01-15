import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  signal,
  viewChild,
  ViewEncapsulation,
  type WritableSignal
} from '@angular/core';
import { FormField, form, submit } from '@angular/forms/signals';

import { FormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { InputRandomIntComponent } from './input-random-int/input-random-int.component';
import { TagsComponent } from './tags/tags.component';
import { randomError } from './util/random-error';
import { SampleDataService } from './util/sample-data.service';
import { ShowErrorsInDom } from './util/show-errors-in-dom.directive';
import { sampleDataValidationSchema } from './validations/sampledata-validation';

@Component({
  imports: [FormField, TagsComponent, ContactsComponent, InputRandomIntComponent, ShowErrorsInDom, FormsModule],
  template: `
    <h1>
      Signal Forms Experiment <small><a href="/signalForms/tree">recusive form</a></small>
    </h1>
    <form (submit)="onSubmit($event)">
      <div class="wrapper">
        <label for="name">
          <span>Name</span>
          <input id="name" type="text" placeholder="Your name" [formField]="fd.name" showError autocomplete="name" />
        </label>
        <label for="dob">
          <span>Date of Birth</span>
          <input id="dob" type="date" [formField]="fd.dob" showError autocomplete="bday" />
        </label>
        <label for="password">
          <span>Password</span>
          <input id="password" type="password" placeholder="Password" [formField]="fd.password" showError autocomplete="new-password" />
        </label>
        <label for="confirm">
          <span>Confirm Password</span>
          <input
            id="confirm"
            type="password"
            placeholder="Confirm Password"
            [formField]="fd.confirm"
            showError
            autocomplete="new-password"
          />
        </label>
        <label>
          <span>Favorite Random Int</span>
          <se-input-random-int [formField]="fd.favoriteRandomInt" />
        </label>
      </div>
      <!-- use the contacts component to iter over the contacts -->
      <fieldset [contacts]="fd.contacts"></fieldset>

      <fieldset>
        <legend>Address</legend>
        <label for="street">
          <span>Street</span>
          <input id="street" type="text" placeholder="Street" [formField]="fd.address.street" showError autocomplete="street-address" />
        </label>
        <label for="city">
          <span>City</span>
          <input id="city" type="text" placeholder="City" [formField]="fd.address.city" showError autocomplete="address-level2" />
        </label>
        <label for="zip">
          <span>Zip</span>
          <input id="zip" type="text" placeholder="Zip" [formField]="fd.address.zip" showError autocomplete="postal-code" />
        </label>
        <label for="state">
          <span>State</span>
          <input id="state" type="text" placeholder="State" [formField]="fd.address.state" showError autocomplete="address-level1" />
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

  _ = afterRenderEffect(() => {
    const d = this.dlg()?.nativeElement as HTMLDialogElement;
    if (this.fd().submitting()) {
      d.showModal();
    } else {
      d.close();
    }
  });

  async onSubmit(ev: Event) {
    ev.preventDefault();
    // this.fd().markAsDirty()

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
