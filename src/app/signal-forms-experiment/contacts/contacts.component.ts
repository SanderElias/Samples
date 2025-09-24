import { Component, computed, input, model } from '@angular/core';
import { Control, Field, ValidationError } from '@angular/forms/signals';
import { SampleDataContactDetailType, type SampleDataContactDetail } from '../util/sample-data.model';
import { showErrorsInDom } from '../util/show-errors-in-dom.directive';

@Component({
  selector: 'fieldset [contacts]',
  imports: [Control, showErrorsInDom],
  template: `<legend>Contacts <button type="button" class="action" (click)="addContact()">+</button></legend>
    @for (contact of contacts(); track $index) {
      <div class="row">
        <button class="action" type="button" (click)="delContact(contact().value())" [disabled]="isLastOne()">🗑️</button>
        <!-- the div is needed to align the error with the control -->
        <div>
          <select [control]="contact.type" showError="">
            <option value="">-- Select type --</option>
            @for (type of types; track type) {
              <option [value]="type">{{ type }}</option>
            }
          </select>
        </div>
        <!-- the div is needed to align the error with the control -->
        <div>
          <input type="text" [control]="contact.value" placeholder="value" showError="" />
        </div>
        <input type="number" [control]="contact.priority" placeholder="priority" />
      </div>
    } `,
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  contacts = input.required<Field<SampleDataContactDetail[], string>>();
  isLastOne = computed(() => this.contacts()().value().length === 1);
  types = Object.values(SampleDataContactDetailType);

  addContact() {
    this.contacts()().value.update(contacts => [...contacts, { type: SampleDataContactDetailType.Email, value: '', priority: 0 }]);
  }
  delContact(contact:SampleDataContactDetail) {
    const contacts = this.contacts()().value;
    if (contacts().length > 1) {
      contacts.update(contacts => contacts.filter((t) => t !== contact));
    }
  }
}


