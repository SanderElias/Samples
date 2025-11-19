import { Component, computed, input } from '@angular/core';
import { Field, FieldTree, type FieldState } from '@angular/forms/signals';
import { SampleDataContactDetailType, type SampleDataContactDetail } from '../util/sample-data.model';
import { ShowErrorsInDom } from '../util/show-errors-in-dom.directive';

@Component({
  selector: 'fieldset [contacts]',
  imports: [Field, ShowErrorsInDom],
  template: `<legend>Contacts <button type="button" class="action" (click)="addContact()">+</button></legend>
    <div>
      Try adding the contact "i@exists.gov" to see aSync validation in action.
    </div>
    @for (contact of contacts(); track $index) {
      <div class="row">
        <button class="action" type="button" (click)="delContact(contact().value())" [disabled]="isLastOne()">🗑️</button>
        <!-- the div is needed to align the error with the control -->
        <label>
          <span>type</span>
          <select [field]="contact.type" showError="">
            <option value="">-- Select type --</option>
            @for (type of types; track type) {
              <option [value]="type">{{ type }}</option>
            }
          </select>
        </label>
        <!-- the div is needed to align the error with the control -->
        <label>
          <span>info</span>
          <input type="text" [field]="contact.info" placeholder="value" showError [style.backgroundColor]="backgroundColor(contact.info)()"/>
        </label>
        <label>
          <span>priority</span>
          <input type="number" [field]="contact.priority" placeholder="priority" />
        </label>
      </div>
    } `,
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  contacts = input.required<FieldTree<SampleDataContactDetail[], string>>();
  contactList = computed(() => this.contacts()());
  isLastOne = computed(() => this.contactList().value().length === 1);
  types = Object.values(SampleDataContactDetailType);

  backgroundColor = (contact: () => FieldState<string, string>) =>
    computed(() => {
      const { pending, dirty } = contact();
      return pending() ? 'var(--orange-6)' : '';
    });

  addContact() {
    this.contactList().value.update(contacts => [...contacts, { type: SampleDataContactDetailType.Email, info: '', priority: 0 }]);
  }

  delContact(contact: SampleDataContactDetail) {
    const contacts = this.contactList().value;
    if (contacts().length > 1) {
      contacts.update(contacts => contacts.filter(t => t !== contact));
    }
  }

}
