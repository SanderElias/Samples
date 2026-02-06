// remove this once Temporal is native in TypeScript
export type { Temporal  } from 'temporal-polyfill';
import type { Temporal as TP } from 'temporal-polyfill';


export type TemporalType =
  | TP.Duration
  | TP.Instant
  | TP.PlainDate
  | TP.PlainDateTime
  | TP.PlainMonthDay
  | TP.PlainTime
  | TP.PlainYearMonth
  | TP.ZonedDateTime


/**
 * Type guard that checks whether a value is a Temporal object.
 *
 * Detection is based on the object's `Symbol.toStringTag` starting with
 * `"Temporal"` (for example `"Temporal.Duration"`). This check is structural
 * and does not depend on the presence of the global `Temporal` object.
 *
 * @param value - value to test
 * @returns `true` when `value` appears to be a Temporal object
 */
export const isTemporal = (value: unknown): value is TemporalType => {
  const tag = value?.[Symbol.toStringTag];
  return tag?.startsWith('Temporal') ?? false;
}

/**
 * Type guard for `Temporal.Duration` objects.
 *
 * @param value - value to test
 * @returns `true` when `value` is a `Temporal.Duration`
 */
export const isTemporalDuration = (value: unknown): value is TP.Duration => {
  return isTemporal(value) && value[Symbol.toStringTag] === 'Temporal.Duration';
}

/**
 * Type guard for `Temporal.Instant` objects.
 *
 * @param value - value to test
 * @returns `true` when `value` is a `Temporal.Instant`
 */
export const isTemporalInstant = (value: unknown): value is TP.Instant => {
  return isTemporal(value) && value[Symbol.toStringTag] === 'Temporal.Instant';
}

/**
 * Type guard for `Temporal.PlainDate` objects.
 *
 * @param value - value to test
 * @returns `true` when `value` is a `Temporal.PlainDate`
 */
export const isTemporalPlainDate = (value: unknown): value is TP.PlainDate => {
  return isTemporal(value) && value[Symbol.toStringTag] === 'Temporal.PlainDate';
}

/**
 * Type guard for `Temporal.PlainDateTime` objects.
 *
 * @param value - value to test
 * @returns `true` when `value` is a `Temporal.PlainDateTime`
 */
export const isTemporalPlainDateTime = (value: unknown): value is TP.PlainDateTime => {
  return isTemporal(value) && value[Symbol.toStringTag] === 'Temporal.PlainDateTime';
}

/**
 * Type guard for `Temporal.PlainMonthDay` objects.
 *
 * @param value - value to test
 * @returns `true` when `value` is a `Temporal.PlainMonthDay`
 */
export const isTemporalPlainMonthDay = (value: unknown): value is TP.PlainMonthDay => {
  return isTemporal(value) && value[Symbol.toStringTag] === 'Temporal.PlainMonthDay';
}

/**
 * Type guard for `Temporal.PlainTime` objects.
 *
 * @param value - value to test
 * @returns `true` when `value` is a `Temporal.PlainTime`
 */
export const isTemporalPlainTime = (value: unknown): value is TP.PlainTime => {
  return isTemporal(value) && value[Symbol.toStringTag] === 'Temporal.PlainTime';
}

/**
 * Type guard for `Temporal.PlainYearMonth` objects.
 *
 * @param value - value to test
 * @returns `true` when `value` is a `Temporal.PlainYearMonth`
 */
export const isTemporalPlainYearMonth = (value: unknown): value is TP.PlainYearMonth => {
  return isTemporal(value) && value[Symbol.toStringTag] === 'Temporal.PlainYearMonth';
}

/**
 * Type guard for `Temporal.ZonedDateTime` objects.
 *
 * @param value - value to test
 * @returns `true` when `value` is a `Temporal.ZonedDateTime`
 */
export const isTemporalZonedDateTime = (value: unknown): value is TP.ZonedDateTime => {
  return isTemporal(value) && value[Symbol.toStringTag] === 'Temporal.ZonedDateTime';
}
