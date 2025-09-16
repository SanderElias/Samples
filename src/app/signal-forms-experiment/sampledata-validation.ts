import {
  FieldPath,
  maxLength,
  minLength,
  patternError,
  required,
  validate,
  applyEach,
  maxError,
  minLengthError,
  schema
} from '@angular/forms/signals';
import type { SampleData } from './sample-data.service';

// Standalone validation schema for SampleData using signalForms
export function sampleDataValidationSchema(rel: FieldPath<SampleData>) {
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

  // Password: required, min length 6, must have upper, lower, number, special
  required(rel.password);
  minLength(rel.password, 6);
  validate(rel.password, ({ value }) => {
    const v = value() as string;
    if (!/[A-Z]/.test(v)) {
      return patternError(/[A-Z]/, { message: 'Password must contain an uppercase letter' });
    }
    if (!/[a-z]/.test(v)) {
      return patternError(/[a-z]/, { message: 'Password must contain a lowercase letter' });
    }
    if (!/[0-9]/.test(v)) {
      return patternError(/[0-9]/, { message: 'Password must contain a number' });
    }
    if (!/[^A-Za-z0-9]/.test(v)) {
      return patternError(/[^A-Za-z0-9]/, { message: 'Password must contain a special character' });
    }
    return null;
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
  required(rel.address.zip);
  validate(rel.address.zip, ({ value }) => {
    const v = value() as string;
    if (v && !/^\d{5}(-\d{4})?$/.test(v)) {
      return patternError(/^\d{5}(-\d{4})?$/, { message: 'ZIP code must be 5 digits or 5+4 digits' });
    }
    return null;
  });

  // Tags: max 5 tags

  maxLength(rel.tags, 5);
  const tagSchema = schema<string>((tag) => {
    required(tag);
    minLength(tag, 2);
    maxLength(tag, 20);
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
}
