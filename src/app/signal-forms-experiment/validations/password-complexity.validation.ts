
import { schema, validate, customError, required, minLength, type FieldPath, type ValidationError } from '@angular/forms/signals';

export const passwordComplexitySchema = schema((password: FieldPath<string>) => {
  required(password, { message: 'can not be empty' });
  minLength(password, 6, { message: 'must be at least 6 characters' });
  validate(password, ({ value }) => {
    const v = value() as string;
    const errors: any[] = [];
    if (!/[A-Z]/.test(v)) {
      errors.push(customError({ message: 'must contain an uppercase letter' }));
    }
    if (!/[a-z]/.test(v)) {
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
  field: undefined as never,
  message
});
