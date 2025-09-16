import { create, each, enforce, group, include, only, test, warn } from 'vest';
import { SampleData, SampleDataContactDetail, SampleDataContactDetailType } from './sample-data.model';


const year = 1000 * 60 * 60 * 24 * 365.25;

/**
 * we use vest in ["stateless" mode](https://vestjs.dev/docs/understanding_state#solution-treat-validations-as-stateless)
 * because we have arrays and objects in our data structure, and we want to be able to validate a single field.
 */
export const suite = (data: SampleData = {} as SampleData, field?: string) =>
  create(() => {
    if (field !== undefined) {
      only(field);
      if (field.startsWith('tags')) {
        for (let i = 0; i < data.tags.length; i++) {
          include(`tags[${i}]`);
        }
      }
      if ((field = 'password')) {
        include('confirm');
      }
      if (field.startsWith('contacts')) {
        const [cn, row, name] = field.split('.');
        console.log({ field, cn, row, name });
        if (cn !== undefined && row !== undefined && name !== undefined) {
          include(`contacts.${row}.value`).when(`contacts.${row}.type`);
          console.log(`include contacts.${row}.value`);
        }
      }
    }

    test('id', 'id is required', () => {
      enforce(data.id).isNotEmpty();
    });
    test('name', 'name is too short', () => {
      enforce(data.name).longerThan(2);
    });

    test('contacts', 'There must be at least 1 contact', () => {
      enforce(data.contacts.length).greaterThanOrEquals(1);
    });

    const contacts = data.contacts || [];
    each(contacts, validateContacts);

    test('dob', 'must be older as 18', () => {
      const dob = new Date(data.dob);
      enforce(dob.getTime()).lessThanOrEquals(new Date(Date.now() - 18 * year).getTime());
    });

    test('dob', 'Older then 80, are you sure?', () => {
      warn();
      const dob = new Date(data.dob);
      enforce(dob.getTime()).lessThanOrEquals(new Date(Date.now() - 80 * year).getTime());
    });

    test('password', 'Password is required', () => {
      enforce(data.password).isNotEmpty();
    });
    test('password', 'Password is too short', () => {
      enforce(data.password).longerThan(2);
    });
    test('password', 'Password is weak. maybe add a number', () => {
      warn();
      enforce(data.password).matches(/[0-9]/);
      enforce(data.password).longerThanOrEquals(6);
    });

    test('confirm', 'Passwords do not match', () => {
      enforce(data.confirm).equals(data.password);
    });

    const address = data.address || {};

    test('address.street', 'Street is required', () => {
      enforce(address.street).isNotEmpty();
    });

    test('address.city', 'City is required', () => {
      enforce(address.city).isNotEmpty();
    });

    test('address.city', 'City must contain any', () => {
      enforce(address.city).condition((city: string) => city.toLocaleLowerCase().includes('any'));
    });

    const tags = data.tags || [];
    each(tags, (tag, index) => {
      test(
        `tags[${index}]`,
        'tag is required',
        () => {
          enforce(tag).isNotEmpty();
        },
        index + 'required'
      );
      test(
        `tags[${index}]`,
        'tag needs to be unique',
        () => {
          enforce(tag).condition((tag: string) => tags.filter(t => t === tag).length === 1);
        },
        index + 'unique' + tag
      );
    });
  })();

function validateContacts(contact: SampleDataContactDetail, i: number) {
  const rowName = `contacts.${i}`;
  group(rowName, () => {
    test(
      `${rowName}.type`,
      'Type is required',
      () => {
        enforce(contact.type);
      },
      `${rowName}.type-required`
    );
    test(
      `${rowName}.type`,
      `Type "${contact.type}" is an unknown type`,
      () => {
        enforce(contact.type).isValueOf(SampleDataContactDetailType);
      },
      `${rowName}.type-unknown${contact.type}`
    );
    test(
      `${rowName}.value`,
      () => {
        enforce(contact.value).message(`${contact.type} can not be blank`).isNotBlank();
        switch (contact.type) {
          case SampleDataContactDetailType.Email:
            enforce(contact.value)
              .message('not an valid email address')
              .matches(/^[^@]+@[^@]+$/);
            break;
          case SampleDataContactDetailType.Fax:
          case SampleDataContactDetailType.Mobile:
          case SampleDataContactDetailType.Phone:
            const allowedChars = '0123456789-()+ '.split('');
            enforce(contact.value)
              .message('Phone number can only contain numbers, spaces, dashes, brackets and plus signs')
              .condition((value: string) => value.split('').every(c => allowedChars.includes(c)));
            enforce(contact.value)
              .message('Phone number must contain at least 9 numbers')
              .condition((value: string) => value.split('').filter(c => '0123456789'.includes(c)).length >= 9);
            break;
        }
      },
      `${rowName}.value-${contact.value}`
    );
  });
}
function create(arg0: () => void) {
  throw new Error('Function not implemented.');
}

function only(field: string) {
  throw new Error('Function not implemented.');
}

function include(arg0: string) {
  throw new Error('Function not implemented.');
}

function enforce(id: any) {
  throw new Error('Function not implemented.');
}

function each(contacts: any, validateContacts: (contact: SampleDataContactDetail, i: number) => void) {
  throw new Error('Function not implemented.');
}

function warn() {
  throw new Error('Function not implemented.');
}

function group(rowName: string, arg1: () => void) {
  throw new Error('Function not implemented.');
}
