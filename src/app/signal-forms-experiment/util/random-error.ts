import { type FieldTree } from '@angular/forms/signals';
import { flattenRecord, isObject } from '@se-ng/signal-utils';

/**
 * Mimics a slow server response and randomly returns a custom error for a random field in the form.
 */
export const randomError = async (form: FieldTree<unknown>) => {
  const data = form().value();
  if (isObject(data)) {
    // get all field names in the form, including nested fields, and flatten them to a single array of strings
    const fieldNames = Object.keys(flattenRecord(data)) as [string, ...string[]] ;
    // pick a random field name
    const randomField =
      fieldNames[Math.floor(Math.random() * fieldNames.length)].split('.');
    try {
      // sometimes the random field is not a valid field, so we need to catch the error
      const fieldTree = randomField.reduce((f, key) => {
        return f[key] ?? f;
      }, form);
      console.log(`the field "${randomField.join('.')}" will have the error`);
      return {
        kind: 'randomError',
        message: 'This is a random server-side error for testing purposes',
        fieldTree
      };
    } catch {
      // if the random field is not valid, we just return a generic error for the name field
      return {
        kind: 'randomError',
        message: 'This is a random server-side error for testing purposes',
        fieldTree: form['name']
      };
    }
  }
};
