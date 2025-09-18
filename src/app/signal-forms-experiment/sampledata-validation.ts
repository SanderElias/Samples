import {
  applyEach,
  FieldPath,
  maxError,
  maxLength,
  minError,
  minLength,
  minLengthError,
  patternError,
  required,
  schema,
  validate,
  type FieldValidationResult,
  type ValidationError
} from '@angular/forms/signals';
import type { SampleData } from './sample-data.service';
import { va } from '../../../dist/samples/browser/chunk-YDUWCTK6';

// Standalone validation schema for SampleData using signalForms
export const sampleDataValidationSchema = schema((rel: FieldPath<SampleData>) => {
  // Name: required, min length 3, only letters and spaces
  required(rel.name);
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

  // Date of Birth: required, not in the future
  required(rel.dob);
  validate(rel.dob, ({ value }) => {
    const v = value() as Date;
    if (v && new Date(v).getTime() > Date.now()) {
      return maxError(Date.now(), { message: 'Date of birth cannot be in the future' });
    }
    return null;
  });
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
  validate(rel.password, ({ value }) => {
    const v = value() as string;
    // this uses any now, because: https://github.com/angular/angular/issues/63860
    const errors: any[] = [];
    if (!/[A-Z]/.test(v)) {
      errors.push(complexityError('must contain an uppercase letter'));
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

  // Tags: max 5 tags

  maxLength(rel.tags, 5);
  const tagSchema = schema<string>(tag => {
    required(tag, { message: 'Tag can not be empty' });
    minLength(tag, 2, { message: 'Tag must be at least 2 characters' });
  });
  applyEach(rel.tags, tagSchema);

  // Contacts: no duplicate values
  validate(rel.contacts, ({ value }) => {
    const v = value() as { value: string }[];
    if (Array.isArray(v)) {
      const seen = new Set();
      for (const c of v) {
        if (c && c.value) {
          if (seen.has(c.value)) {
            return patternError(/.*/, { message: 'Duplicate contact values are not allowed' });
          }
          seen.add(c.value);
        }
      }
    }
    return null;
  });
});

export const complexityError = (message: string): ValidationError => ({
  kind: 'complexity',
  field: undefined as never,
  message
});
