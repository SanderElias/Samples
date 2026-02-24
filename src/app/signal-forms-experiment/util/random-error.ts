import { type FieldTree } from '@angular/forms/signals';
import { flattenRecord, isObject } from '@se-ng/signal-utils';

/**
 * Mimics a slow server response and randomly returns a custom error for a random field in the form.
 */
export const randomError = async (form: FieldTree<unknown>) => {
  console.log('submit with error');
  const data = form().value();
  console.dir(data);
  if (isObject(data)) {
    // get all field names in the form, including nested fields, and flatten them to a single array of strings
    const fieldNames = Object.keys(flattenRecord(data));
    // pick a random field name
    const randomField =
      fieldNames[Math.ceil(Math.random() * fieldNames.length)].split('.');
    try {
      // sometimes the random field is not a valid field, so we need to catch the error
      const fieldTree = randomField.reduce((f, key) => {
        return f[key] ?? f;
      }, form);
      console.log('random field with error', randomField.join('.'));
      return {
        kind: 'randomError',
        message: 'This is a random server-side error for testing purposes',
        fieldTree
      };
    } catch {
      return null;
    }
  }
};
