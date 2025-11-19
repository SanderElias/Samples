import { apply, maxError, minError, minLengthError, patternError, required, schema, validate } from '@angular/forms/signals';
import { type SampleData } from '../util/sample-data.model';
import { contactsSchema } from './contacts.validation';
import { passwordComplexitySchema } from './password-complexity.validation';
import { tagsSchema } from './tags.validation';

// Standalone validation schema for SampleData using signalForms
export const sampleDataValidationSchema = schema<SampleData>(relation => {
  // Name: required, min length 3, only letters and spaces
  required(relation.name, { message: 'a name is required' });
  validate(relation.name, ({ value }) => {
    const v = value() ;
    if (v && v.length < 3) {
      return minLengthError(3, { message: 'Name must be at least 3 characters' });
    }
    if (v && !/^[A-Za-z\s]+$/.test(v)) {
      return patternError(/^[A-Za-z\s]+$/, { message: 'Name must contain only letters and spaces' });
      // return {"kind": "complexity", "message": "Name must contain only letters and spaces", "requiredComplexity": "only letters and spaces"};
    }
    return null;
  });

  // Date of Birth:
  required(relation.dob);
  // Date of Birth: not in the future
  validate(relation.dob, ({ value }) => {
    const v = value() as Date;
    if (v && new Date(v).getTime() > Date.now()) {
      return maxError(Date.now(), { message: 'Date of birth cannot be in the future' });
    }
    return null;
  });
  // Date of Birth: year must be 1900 or later
  validate(relation.dob, ({ value }) => {
    const v = value() as Date;
    if (v && new Date(v).getFullYear() < 1900) {
      return minError(1900, { message: 'Year must be 1900 or later' });
    }
    return null;
  });

  // Password: required, min length 6, must have upper, lower, number, special
  apply(relation.password, passwordComplexitySchema);

  // Confirm Password: required, must match password
  required(relation.confirm);
  // Confirm Password: must match password
  validate(relation.confirm, ({ value, valueOf }) => {
    const v = value() ;
    const pw = valueOf(relation.password);
    if (v !== pw) {
      return { kind: 'mismatch', message: 'Passwords do not match' };
    }
    return null;
  });

  // validateAsync(relation.username, async ({ value }) => {});

  // Address: required fields and zip format
  required(relation.address.street);
  required(relation.address.city);
  required(relation.address.state);

  apply(relation.tags, tagsSchema);
  apply(relation.contacts, contactsSchema);
});
