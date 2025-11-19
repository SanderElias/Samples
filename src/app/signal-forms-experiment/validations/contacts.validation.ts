import { apply, applyEach, applyWhenValue, minLength, patternError, required, schema, validate } from '@angular/forms/signals';
import { SampleData, SampleDataContactDetail, SampleDataContactDetailType } from '../util/sample-data.model';
import { emailAddress } from './email-address.validation';
import { phoneNumber } from './phone-number.validation';

export const contactsSchema = schema<SampleData['contacts']>(contactsArray => {
  // At least one contact required
  minLength(contactsArray, 1, { message: 'At least one contact is required' });
  applyEach(contactsArray, contactSchema);
});

export const contactSchema = schema<SampleDataContactDetail>(contact => {
  const types = Object.values(SampleDataContactDetailType);

  required(contact.info, { message: 'a value is required' });
  // check that type is valid
  validate(contact.type, ({ value }) => {
    const v = value() as SampleDataContactDetailType;
    if (types.includes(v) === false) {
      return { kind: 'invalidType', message: 'Invalid contact type' };
    }
    return null;
  });

  // apply a schema based on the type
  applyWhenValue(
    contact,
    c => c.type === SampleDataContactDetailType.Email,
    c => apply(c.info, emailAddress)
  );
  // I wrote out the other types explicitly for clarity, but they could be combined
  applyWhenValue(
    contact,
    c => c.type === SampleDataContactDetailType.Fax,
    c => apply(c.info, phoneNumber)
  );
  applyWhenValue(
    contact,
    c => c.type === SampleDataContactDetailType.Mobile,
    c => apply(c.info, phoneNumber)
  );
  applyWhenValue(
    contact,
    c => c.type === SampleDataContactDetailType.Phone,
    c => apply(c.info, phoneNumber)
  );
});
