import {
  apply,
  customError,
  FieldPath,
  maxError,
  minError,
  minLength,
  minLengthError,
  patternError,
  required,
  schema,
  validate,
  type ValidationError
} from '@angular/forms/signals';
import { contactsSchema } from './contacts.validation';
import { type SampleData } from '../util/sample-data.model';
import { tagsSchema } from './tags.validation';

// Standalone validation schema for SampleData using signalForms
export const sampleDataValidationSchema = schema((rel: FieldPath<SampleData>) => {
  // Name: required, min length 3, only letters and spaces
  required(rel.name, { message: 'a name is required' });
  validate(rel.name, ({ value }) => {
    const v = value() as string;
    if (v && v.length < 3) {
      return minLengthError(3, { message: 'Name must be at least 3 characters' });
    }
    if (v && !/^[A-Za-z\s]+$/.test(v)) {
      return patternError(/^[A-Za-z\s]+$/, { message: 'Name must contain only letters and spaces' });
    }
    return null;
  });

  // Date of Birth:
  required(rel.dob);
  // Date of Birth: not in the future
  validate(rel.dob, ({ value }) => {
    const v = value() as Date;
    if (v && new Date(v).getTime() > Date.now()) {
      return maxError(Date.now(), { message: 'Date of birth cannot be in the future' });
    }
    return null;
  });
  // Date of Birth: year must be 1900 or later
  validate(rel.dob, ({ value }) => {
    const v = value() as Date;
    if (v && new Date(v).getFullYear() < 1900) {
      return minError(1900, { message: 'Year must be 1900 or later' });
    }
    return null;
  });

  // Password: required, min length 6, must have upper, lower, number, special
  required(rel.password, { message: 'can not be empty' });
  minLength(rel.password, 6, { message: 'must be at least 6 characters' });
  // Password complexity
  validate(rel.password, ({ value }) => {
    const v = value() as string;
    // this uses any now, because: https://github.com/angular/angular/issues/63860
    const errors: any[] = [];
    if (!/[A-Z]/.test(v)) {
      errors.push(customError({ message: 'must contain an uppercase letter' }));
      // errors.push(complexityError('must contain an uppercase letter'));
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

  // Confirm Password: required, must match password
  required(rel.confirm);
  // Confirm Password: must match password
  validate(rel.confirm, ({ value, valueOf }) => {
    const v = value() as string;
    const pw = valueOf(rel.password);
    if (v !== pw) {
      return patternError(/.*/, { message: 'Passwords do not match' });
    }
    return null;
  });

  // Address: required fields and zip format
  required(rel.address.street);
  required(rel.address.city);
  required(rel.address.state);

  apply(rel.tags, tagsSchema);
  apply(rel.contacts, contactsSchema);
});

export const complexityError = (message: string): ValidationError => ({
  kind: 'complexity',
  field: undefined as never,
  message
});

