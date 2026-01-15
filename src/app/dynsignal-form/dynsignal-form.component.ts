import { JsonPipe } from '@angular/common';
import { Component, effect, linkedSignal, signal } from '@angular/core';
import { FormField, form, metadata, type Validator } from '@angular/forms/signals';
import { getPropNames } from '../signal-forms-experiment/dynamic/dynamic.component';
import path from 'path';

export const types = ['boolean', 'number', 'string'];
export type Types = (typeof types)[number];

export interface DynForm {
  [key: string]: {
    type: (typeof types)[number];
    defaultValue: boolean | number | string;
  };
}

interface FormFieldDef<T> {
  propertyName: string;
  type: Types;
  defaultValue: boolean | number | string | {} | [];
  label: string;
  placeholder?:  string;
  description?: string;
  helpText?:  string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
  hidden?: boolean;
  validators?: Validator<T>[];
}



@Component({
  selector: 'se-dynsignal-form',
  imports: [JsonPipe, FormField],
  template: `
    <h2>Dynamic Signal Form</h2>
    <form>
      <label>
        <span>Field Name</span>
        <input type="text" [formField]="nfFd.name" />
      </label>
      <label>
        <span>Field Type</span>
        <select [formField]="nfFd.type">
          @for (type of types; track type) {
            <option value="{{ type }}">{{ type }}</option>
          }
        </select>
      </label>
      <label>
        <span>Default Field Value</span>
        @switch (nfFd.type().value()) {
          @case ('boolean') {
            <input type="checkbox" [formField]="$any(nfFd.defaultValue)" />
          }
          @case ('number') {
            <input type="number" [formField]="$any(nfFd.defaultValue)" />
          }
          @case ('string') {
            <input type="text" [formField]="$any(nfFd.defaultValue)" />
          }
        }
      </label>
      <button type="button" (click)="addField(nfFd.name().value(), nfFd.type().value(), nfFd.defaultValue().value())">
        Add Field
      </button>
    </form>

    <h3>Results:</h3>
    <form>
      @for (_field of fields(); track _field) {
        <label for="{{ _field }}">
          <span>{{ _field }}</span>
          <input type="text" placeholder="{{ _field }}" [formField]="$any(dataForm[_field])" />
        </label>
      }
    </form>
    <pre><code>{{ dataForm().value() | json }}</code></pre>
  `,
  styleUrl: './dynsignal-form.component.css'
})
export class DynsignalFormComponent {
  formData = signal<DynForm>({
    name: {
      type: 'string',
      defaultValue: 'default'
    },
    email: {
      type: 'string',
      defaultValue: 'default'
    }
  });
  types = types;

  newField = signal<{ name: string; type: (typeof types)[number]; defaultValue: boolean | number | string }>({
    name: '',
    type: 'string',
    defaultValue: ''
  });
  nfFd = form(this.newField);
  model = linkedSignal(() => formModelFromDynForm(this.formData()));

  dynForm = form(this.formData);

  dataForm = form(this.model, (path) => {
    // metadata(path.name,() => {});
  });

  fields = getPropNames.bind(this.dataForm);

  addField(fieldName: string, fieldType: (typeof types)[number], defaultValue: boolean | number | string) {
    this.formData.update(fd => {
      return {
        ...fd,
        [fieldName]: {
          type: fieldType,
          defaultValue
        }
      };
    });
  }
}


function formModelFromDynForm(dynForm: DynForm) {
  const model: { [key: string]: boolean | number | string } = {};
  for (const key in dynForm) {
    model[key] = dynForm[key as keyof DynForm].defaultValue;
  }
  return model;
}


// this part is commented out because it doesn't currently work
// and currently only serves as a discussion point.

// interface OptionalStuff {
//   optionalField?: string;
//   /**
//    * Having an optional field with non-optional fields inside
//    * should also work, but demands validation to handle the undefined subfield.
//   **/
//   optionalCar?: {
//     carBrand: string;
//     model: string;
//   };
// }

// @Component({
//   selector: 'se-optional-stuff',
//   imports: [JsonPipe, Field],
//   template: `
//     <h2>Optional Stuff</h2>
//     <form>
//       <label>
//         <span>Optional Field</span>
//         <input type="text" [formField]="optForm.optionalField" />
//       </label>
//       <fieldset>
//         <legend>Optional Car</legend>
//         <label>
//           <span>Car Brand</span>
//           <input type="text" [formField]="optForm.optionalCar?.carBrand" />
//         </label>
//         <label>
//           <span>Model</span>
//           <input type="text" [formField]="optForm.optionalCar?.model" />
//         </label>
//       </fieldset>
//     </form>
//     <pre><code>{{ optForm().value() | json }}</code></pre>
//   `,
//   styleUrl: './dynsignal-form.component.css'
// })
// export class OptionalStuffComponent {
//   model = signal<OptionalStuff>({
//     optionalCar: undefined
//   });
//   optForm = form(this.model);
// }


