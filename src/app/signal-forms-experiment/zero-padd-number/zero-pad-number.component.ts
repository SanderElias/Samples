import { Component, input, model } from '@angular/core';
import {
  transformedValue,
  type FormValueControl
} from '@angular/forms/signals';

const defaultMaxLength = 5;

@Component({
  selector: 'se-zero-pad-number',
  imports: [],
  template: `<input
    type="text"
    [value]="rawValue()"
    (input)="format($event.target.value)"
  />`,
  styleUrls: ['./zero-pad-number.component.css']
})
export class ZeroPadNumberComponent implements FormValueControl<
  number | undefined | null
> {
  readonly value = model.required<number | undefined | null>();
  readonly padTo = input(defaultMaxLength, {
    transform: (v: number | string | undefined): number =>
      v === ''
        ? defaultMaxLength
        : isNaN(Number(v))
          ? defaultMaxLength
          : Number(v)
  });

  format = (s: string) => {
    this.rawValue.set(format(s, this.padTo()));
  };

  /**
   *  New in V21.2
   *  TransformValue allow to define a custom parsing and formatting logic
   *   for the form control. The `rawValue` signal will then represent the
   *  formatted value, while the `value` signal will represent the parsed value.
   * This is particularly useful for cases like this, where we want to
   * display a zero-padded number but work with it as a regular number in the form model.
   */
  readonly rawValue = transformedValue(this.value, {
    parse: (s: string) => {
      if (s == null || s === undefined || s.trim() === '') {
        // leave an empty value  untouched
        return { value: undefined };
      }
      const num = Number(s);

      if (isNaN(num)) {
        //  We should inform the user if its not a valid number
        return {
          errors: [
            {
              kind: 'typeError',
              message: `value ${s} could not be parsed as a number`
            }
          ]
        };
      }
      // als is as expected, we return the parsed number as the form value
      return { value: num };
    },
    // when the forms value changes, we need to format it for display in the input
    format: n => format(n, this.padTo())
  });
}

/**
 * Format a value into a zero-padded string for display.
 *
 * Rules:
 * - If `n` is a number or a numeric string it is converted to a Number and
 *   left-padded with `'0'` to reach the width specified by `padTo`.
 * - If `n` is a non-numeric string the original string is returned unchanged
 *   (so user input like `"abc"` is preserved).
 * - If `n` is `null`/`undefined` or cannot be parsed as a number, a string of
 *   `padTo` zeros is returned.
 *
 * This is used by the component to present a zero-padded representation in
 * the input while keeping the underlying form model as a number.
 *
 * @param n - The value to format (number, numeric string, or null/undefined).
 * @param padTo - Minimum width of the output string; leading zeros are added
 *                until this length is reached.
 * @returns A string suitable for display in the input field.
 */
function format(n: number | string | undefined | null, padTo: number): string {
  return isNaN(Number(n))
    ? typeof n === 'string'
      ? n
      : '0'.padStart(padTo, '0')
    : Number(n).toString().padStart(padTo, '0');
}
