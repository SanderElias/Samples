import { resource } from '@angular/core';
import { patternError, schema, validate, validateAsync } from '@angular/forms/signals';

/**
 * check email address format
 * - must contain "@" and "."
 * - simple regex for now
 */
export const emailAddress = schema<string>((emailAddress) => {
  validate(emailAddress, ({ value }) => {
    const v = value() as string;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
      return patternError(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, { message: 'Invalid email address' });
    }
    return null;
  });

  validateAsync(emailAddress, {
    params: ({ value, state }) => (state.dirty() ? value() : undefined) as string | undefined,
    factory: params =>
      resource({
        params,
        loader: async ({ params }) => {
          const emailToCheck = params as string;
          await new Promise(resolve => setTimeout(resolve, 2500)); // simulate server delay
          const existingEmails = ['i@exists.gov', 'j@exists.gov'];
          return existingEmails.includes(emailToCheck);
        }
      }),
    onError: err => ({
      kind: 'serverError',
      message: 'Email address already exists'
    }),
    onSuccess: () => null
  });
});
