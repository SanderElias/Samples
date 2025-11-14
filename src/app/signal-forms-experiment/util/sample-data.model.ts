export interface SampleData {
  id: string;
  name: string;
  dob: Date;
  password: string;
  confirm: string;
  tags: string[];
  favoriteRandomInt: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  contacts: SampleDataContactDetail[];
}

export enum SampleDataContactDetailType {
  Email = 'E-Mail',
  Fax = 'Fax',
  Mobile = 'Mobile',
  Phone = 'Phone'
}

export interface SampleDataContactDetail {
  type: SampleDataContactDetailType;
  info: string;
  priority: number;
}
