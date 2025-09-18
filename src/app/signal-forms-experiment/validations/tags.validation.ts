import { applyEach, type FieldPath, maxLength, minLength, patternError, required, schema, validate } from '@angular/forms/signals';

export const tagsSchema = schema((tagsArray: FieldPath<string[]>) => {
  maxLength(tagsArray, 7, { message: 'Maximum 5 tags allowed' });
  // Each tag: required, min length 2, no duplicates
  const tagSchema = schema<string>(tag => {
    required(tag, { message: 'Tag can not be empty' });
    minLength(tag, 2, { message: 'Tag must be at least 2 characters' });
    // No duplicate tags
    validate(tag, ({ value, state, valueOf }) => {
      const tagToTest = value() as string;
      const index = parseInt('' + state.keyInParent(), 10);
      const tags = valueOf(tagsArray).map((tag, idx) => [tag, idx]);

      for (const [tag, idx] of tags) {
        if (idx !== index && tag === tagToTest) {
          return patternError(/.*/, { message: 'Duplicate tags are not allowed' });
        }
      }
    });
    validate(tag, ({ value }) => {
      const v = value().toLowerCase();
      if (v.includes('react')) {
        return patternError(/.*/, { message: 'no, just, no!' });
      }
    });
  });
  applyEach(tagsArray, tagSchema);
});
