import { isDate } from './is-date';

describe('isDate', () => {
  it('should return true for Date objects', () => {
    expect(isDate(new Date())).toBe(true);
  });

  it('should return false for strings', () => {
    expect(isDate('2023-01-01')).toBe(false);
  });

  it('should return false for numbers', () => {
    expect(isDate(1234567890)).toBe(false);
  });

  it('should return false for objects that are not Date', () => {
    expect(isDate({})).toBe(false);
    expect(isDate({ getMonth: 'not a function' })).toBe(false);
  });

  it('should return false for null and undefined', () => {
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
  });

  it('should return false for arrays', () => {
    expect(isDate([])).toBe(false);
  });

  it('should return false for functions', () => {
    expect(isDate(() => {})).toBe(false);
  });
});
