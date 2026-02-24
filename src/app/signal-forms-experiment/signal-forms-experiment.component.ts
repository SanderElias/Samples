import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
  ViewEncapsulation
} from '@angular/core';
import {
  form,
  FormField,
  FormRoot,
  type TreeValidationResult
} from '@angular/forms/signals';

// import { FormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { InputRandomIntComponent } from './input-random-int/input-random-int.component';
import { TagsComponent } from './tags/tags.component';
import { randomError } from './util/random-error';
import { SampleDataService } from './util/sample-data.service';
import { ShowErrorsInDom } from './util/show-errors-in-dom.directive';
import { sampleDataValidationSchema } from './validations/sampledata-validation';
import { ZeroPadNumberComponent } from './zero-padd-number/zero-pad-number.component';
import { NotifyDialogService } from '../crud-stuff/notify-dialog/notify-dialog.service';

@Component({
  imports: [
    FormField,
    TagsComponent,
    ContactsComponent,
    InputRandomIntComponent,
    ZeroPadNumberComponent,
    ShowErrorsInDom,
    // FormsModule,
    FormRoot
  ],
  template: `
    <h1>
      Signal Forms Experiment
      <small><a href="/signalForms/tree">recursive form</a></small>
    </h1>
    <!-- FormRoot is new in V21.2. It provides a way to handle form submission and validation in a more structured way. -->
    <form [formRoot]="fd">
      <div class="wrapper">
        <label for="name">
          <span>Name</span>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            [formField]="fd.name"
            showError
            autocomplete="name"
          />
        </label>
        <label for="dob">
          <span>Date of Birth</span>
          <input
            id="dob"
            type="date"
            [formField]="fd.dob"
            showError
            autocomplete="bday"
          />
        </label>
        <label for="password">
          <span>Password</span>
          <input
            id="password"
            type="password"
            placeholder="Password"
            [formField]="fd.password"
            showError
            autocomplete="new-password"
          />
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
          <!-- This is a custom form control that generates a random integer and binds it to the form field. -->
          <se-input-random-int [formField]="fd.favoriteRandomInt" />
        </label>
        <label>
          <span>Or, use a custom zero-padded number favorite random</span>
          <!-- This is a custom form control that displays a zero-padded number and binds it to the form field. -->
          <se-zero-pad-number [formField]="fd.favoriteRandomInt" showError />
        </label>
      </div>
      <!-- use the contacts component to iter over the contacts -->
      <fieldset [contacts]="fd.contacts"></fieldset>

      <fieldset>
        <legend>Address</legend>
        <label for="street">
          <span>Street</span>
          <input
            id="street"
            type="text"
            placeholder="Street"
            [formField]="fd.address.street"
            showError
            autocomplete="street-address"
          />
        </label>
        <label for="city">
          <span>City</span>
          <input
            id="city"
            type="text"
            placeholder="City"
            [formField]="fd.address.city"
            showError
            autocomplete="address-level2"
          />
        </label>
        <label for="zip">
          <span>Zip</span>
          <input
            id="zip"
            type="text"
            placeholder="Zip"
            [formField]="fd.address.zip"
            showError
            autocomplete="postal-code"
          />
        </label>
        <label for="state">
          <span>State</span>
          <input
            id="state"
            type="text"
            placeholder="State"
            [formField]="fd.address.state"
            showError
            autocomplete="address-level1"
          />
        </label>
      </fieldset>
      <!-- use the tags component to iter over the tags -->
      <fieldset [tags]="fd.tags"></fieldset>
      <button type="submit" [disabled]="!fd().valid()">Submit</button>
    </form>
    <dialog #dlg>{{ dlgText() }}</dialog>
  `,
  styleUrl: './signal-forms-experiment.component.css',
  // I use global styles for this component to make sure the styles are applied to the form elements inside the child components
  // there are other ways to do this, but this is the simplest for this sample
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalFormsExperimentComponent {
  dataService = inject(SampleDataService);
  ns = inject(NotifyDialogService);
  id = signal('1');
  relation = this.dataService.getById(this.id);
  dlgText = signal('Submitting and validating on the server, please hold!');

  /** submission now moved into the form handler, there is more to it as I'm using here. */
  fd = form(this.relation, sampleDataValidationSchema, {
    submission: {
      action: async value => {
        const dialog = this.dlg()?.nativeElement as HTMLDialogElement;
        let result: undefined | TreeValidationResult = undefined;
        this.dlgText.set(
          'Submitting and validating on the server, please hold!'
        );
        dialog.showModal();
        await new Promise(resolve => setTimeout(resolve, 1000)); // wait a bit, to simulate a slow server response
        if (Math.random() < 0.9) {
          this.dlgText.set('Server validation failed, please fix the error!');
          result = await randomError(this.fd);
        } else {
          this.dlgText.set('Form submitted successfully!');
        }
        setTimeout(() => {
          dialog.close(); // close the dialog after a bit
          // probably in a real app, you want to do this after the user clicks a button in the dialog, but for this sample, we'll just close it after a few seconds
        }, 2000);
        return result; //
      }
    }
  });

  dlg = viewChild('dlg', { read: ElementRef });


}
