import { Component, computed, input } from '@angular/core';
import { Control, Field } from '@angular/forms/signals';
import { SampleDataContactDetailType, type SampleDataContactDetail } from '../sample-data.service';

@Component({
  selector: 'fieldset [contacts]',
  imports: [Control],
  template: `<legend>Contacts <button type="button" class="action" (click)="addContact()">+</button></legend>
    @for (contact of contacts(); track $index) {
      <label>
        <button class="action" type="button" (click)="delContact($index)" [disabled]="isLastOne()">🗑️</button>
        <select [control]="contact.type">
          <option value="">-- Select type --</option>
          @for (type of types; track type) {
            <option [value]="type">{{ type }}</option>
          }
        </select>
        <input type="text" [control]="contact.value" placeholder="value" />
        <input type="number" [control]="contact.priority" placeholder="priority" />
      </label>
    } `,
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  contacts = input.required<Field<SampleDataContactDetail[], string>>();
  isLastOne = computed(() => this.contacts()().value().length === 1);
  types = Object.values(SampleDataContactDetailType);

  addContact() {
    this.contacts()().value.update(contacts => [...contacts, { type: SampleDataContactDetailType.Email, value: '', priority: 0 }]);
  }
  delContact(index: number) {
    const contacts = this.contacts()().value;
    if (contacts().length > 1) {
      contacts.update(contacts => contacts.filter((t, i) => i !== index));
    }
  }
}
