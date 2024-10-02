export const dTos = (date: Date) => {
  const split = {
    year: date.getFullYear(),
    month: (date.getMonth() + 1).toString().padStart(2, '0'),
    day: date.getDate().toString().padStart(2, '0'),
    hours: date.getHours().toString().padStart(2, '0'),
    minutes: date.getMinutes().toString().padStart(2, '0'),
  };
  return `${split.year}-${split.month}-${split.day}T${split.hours}:${split.minutes}`;
};

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dTos',
  pure: false,
  standalone: true,
})
export class DTosPipe implements PipeTransform {
  transform<T>(value: any): T | string {
    if (value instanceof Date) {
      return dTos(value);
    }
    if (typeof value === 'string' && isDateString(value)) {
      return dTos(new Date(value));
    }
    return value;
  }
}

export const isDateString = (value: string): boolean => {
  return isValidDate(new Date(value));
};

export const isValidDate = (date: Date): boolean => {
  return date instanceof Date && !isNaN(date.getTime());
};
