import { customError, type FieldTree } from '@angular/forms/signals';
import { isObject } from '@se-ng/signal-utils';

import { flattenRecord } from '../../crud-stuff/utils/flatten-record';

/**
 * Mimics a slow server response and randomly returns a custom error for a random field in the form.
 */
export const randomError = async (form: FieldTree<unknown>) => {
  // mimicking a slow server response
  console.log('submit with error');
  await new Promise(resolve => setTimeout(resolve, 3000));
  const data = form().value();
  if (isObject(data)) {
    const fieldNames = Object.keys(flattenRecord(data));
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
        message: 'This is a random server-side error for testing purposes',
        field
      });
    } catch {
      return null;
    }
  }
};
