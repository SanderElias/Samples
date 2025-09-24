import { schema, validate, minLengthError, maxError, patternError, type FieldPath } from '@angular/forms/signals';

/**
 * CHeck for phone number:
 * - only numbers, spaces, ()+- allowed
 * - at least 7 digits
 * - max 15 digits
 */
export const phoneNumber = schema((valueField: FieldPath<string>) => {
  validate(valueField, ({ value }) => {
    // this uses any now, because: https://github.com/angular/angular/issues/63860
    const errors: any[] = [];

    const v = value() as string;
    const numberOfDigits = v.split('').filter(c => '0123456789'.includes(c)).length;
    if (!/^\+?[0-9\s\-()]{7,}$/.test(v)) {
      errors.push(patternError(/^\+?[0-9\s\-()]{7,}$/, { message: 'only numbers and ()+- are allowed' }));
    }
    if (numberOfDigits < 7) {
      errors.push(minLengthError(7, { message: 'At least 7 digits are required' }));
    }
    if (numberOfDigits > 15) {
      errors.push(maxError(15, { message: 'Maximum 15 digits allowed' }));
    }
    return errors.length > 0 ? errors : null;
  });
  
});
