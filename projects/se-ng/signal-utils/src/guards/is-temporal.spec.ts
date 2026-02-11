import * as TP from 'temporal-polyfill';
import { describe, it, expect } from 'vitest';
import {
  isTemporal,
  isTemporalDuration,
  isTemporalInstant,
  isTemporalPlainDate,
  isTemporalPlainDateTime,
  isTemporalPlainMonthDay,
  isTemporalPlainTime,
  isTemporalPlainYearMonth,
  isTemporalZonedDateTime,
} from './is-temporal';

// The polyfill may export a named `Temporal` or attach it to globalThis depending on bundler; prefer the named export with a fallback
const T = ((TP as any)?.Temporal ?? (globalThis as any).Temporal) as any;

describe('isTemporal (real Temporal objects)', () => {
  it('returns true for actual Temporal.* objects', () => {
    expect(isTemporal(T.Duration.from('PT1H'))).toBe(true);
    expect(isTemporal(T.Instant.from('1970-01-01T00:00Z'))).toBe(true);
    expect(isTemporal(T.PlainDate.from('2020-01-01'))).toBe(true);
    expect(isTemporal(T.PlainDateTime.from('2020-01-01T01:02'))).toBe(true);
    expect(isTemporal(T.PlainMonthDay.from('--01-02'))).toBe(true);
    expect(isTemporal(T.PlainTime.from('12:34'))).toBe(true);
    expect(isTemporal(T.PlainYearMonth.from('2020-01'))).toBe(true);
    expect(isTemporal(T.ZonedDateTime.from('2020-01-01T00:00[UTC]'))).toBe(true);
  });

  it('returns false for non Temporal values', () => {
    expect(isTemporal(new Date())).toBe(false);
    expect(isTemporal({})).toBe(false);
    expect(isTemporal('Temporal.Duration')).toBe(false);
    expect(isTemporal(null)).toBe(false);
    expect(isTemporal(undefined)).toBe(false);
  });
});

describe('specific Temporal guards (real objects)', () => {
  it('isTemporalDuration identifies Temporal.Duration only', () => {
    expect(isTemporalDuration(T.Duration.from('PT1H'))).toBe(true);
    expect(isTemporalDuration(T.Instant.from('1970-01-01T00:00Z'))).toBe(false);
  });

  it('isTemporalInstant identifies Temporal.Instant only', () => {
    expect(isTemporalInstant(T.Instant.from('1970-01-01T00:00Z'))).toBe(true);
    expect(isTemporalInstant(T.Duration.from('PT1H'))).toBe(false);
  });

  it('isTemporalPlainDate identifies Temporal.PlainDate only', () => {
    expect(isTemporalPlainDate(T.PlainDate.from('2020-01-01'))).toBe(true);
    expect(isTemporalPlainDate(T.PlainDateTime.from('2020-01-01T01:02'))).toBe(false);
  });

  it('isTemporalPlainDateTime identifies Temporal.PlainDateTime only', () => {
    expect(isTemporalPlainDateTime(T.PlainDateTime.from('2020-01-01T01:02'))).toBe(true);
    expect(isTemporalPlainDateTime(T.PlainDate.from('2020-01-01'))).toBe(false);
  });

  it('isTemporalPlainMonthDay identifies Temporal.PlainMonthDay only', () => {
    expect(isTemporalPlainMonthDay(T.PlainMonthDay.from('--01-02'))).toBe(true);
    expect(isTemporalPlainMonthDay(T.PlainTime.from('12:34'))).toBe(false);
  });

  it('isTemporalPlainTime identifies Temporal.PlainTime only', () => {
    expect(isTemporalPlainTime(T.PlainTime.from('12:34'))).toBe(true);
    expect(isTemporalPlainTime(T.PlainYearMonth.from('2020-01'))).toBe(false);
  });

  it('isTemporalPlainYearMonth identifies Temporal.PlainYearMonth only', () => {
    expect(isTemporalPlainYearMonth(T.PlainYearMonth.from('2020-01'))).toBe(true);
    expect(isTemporalPlainYearMonth(T.PlainMonthDay.from('--01-02'))).toBe(false);
  });

  it('isTemporalZonedDateTime identifies Temporal.ZonedDateTime only', () => {
    expect(isTemporalZonedDateTime(T.ZonedDateTime.from('2020-01-01T00:00[UTC]'))).toBe(true);
    expect(isTemporalZonedDateTime(T.Instant.from('1970-01-01T00:00Z'))).toBe(false);
  });
});
