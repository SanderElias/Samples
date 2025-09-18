import { schema, validate, patternError, type FieldPath } from '@angular/forms/signals';

/**
 * check email address format
 * - must contain "@" and "."
 * - simple regex for now
 */
export const emailAddress = schema((valueField: FieldPath<string>) => {
  validate(valueField, ({ value }) => {
    const v = value() as string;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
      return patternError(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, { message: 'Invalid email address' });
    }
    return null;
  });
});
