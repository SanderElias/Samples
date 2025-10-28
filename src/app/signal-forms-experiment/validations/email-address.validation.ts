import { resource } from '@angular/core';
import { schema, validate, patternError, type FieldPath, validateAsync, type ValidationError } from '@angular/forms/signals';

/**
 * check email address format
 * - must contain "@" and "."
 * - simple regex for now
 */
export const emailAddress = schema((emailAddress: FieldPath<string>) => {
  validate(emailAddress, ({ value }) => {
    const v = value() as string;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
      return patternError(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, { message: 'Invalid email address' });
    }
    return null;
  });

  validateAsync(emailAddress, {
    params: ({ value, state }) => state.dirty() ? value() : undefined,
    factory: params =>
      resource({
        params,
        loader: async ({ params }) => {
          const emailToCheck = params;
          await new Promise(resolve => setTimeout(resolve, 2500)); // simulate server delay
          const existingEmails = ['i@exists.gov', 'j@exists.gov'];
          return existingEmails.includes(emailToCheck);
        }
      }),
    errors: (err) =>
      err
        ? {
            kind: 'serverError',
            message: 'Email address already exists'
          }
        : null
  });
});
