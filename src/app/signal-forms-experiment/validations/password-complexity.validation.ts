import { customError, minLength, required, schema, validate, type ValidationError } from '@angular/forms/signals';

export const passwordComplexitySchema = schema<string>((password) => {
  required(password, { message: 'can not be empty' });
  minLength(password, 6, { message: 'must be at least 6 characters' });
  validate(password, ({ value }) => {
    const v = value();
    const errors: ValidationError[] = [];
    if (!/[A-Z]/.test(v)) {
      // show how to use an object to create a custom error
      errors.push({kind:'complexity', message: 'must contain an uppercase letter' });
    }
    if (!/[a-z]/.test(v)) {
      // show how to create a custom wrapper function for custom errors
      errors.push(complexityError('must contain a lowercase letter'));
    }
    if (!/[0-9]/.test(v)) {
      errors.push(complexityError('must contain a number'));
    }
    if (!/[^A-Za-z0-9]/.test(v)) {
      errors.push(complexityError('must contain a special character'));
    }
    return errors.length > 0 ? errors : null;
  });
});

export const complexityError = (message: string): ValidationError => ({
  kind: 'complexity',
  message
});
