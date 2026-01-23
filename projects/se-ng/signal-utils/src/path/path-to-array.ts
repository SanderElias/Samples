/**
 * Convert a dot/bracket path string into an array of path segments.
 *
 * Behavior:
 * - Supports dot and bracket notation (e.g. `a.b[0].c` or `a[0].b`).
 * - Treats `.` and `,` as separators.
 * - Removes brackets (`[` and `]`) and **strips** quote characters (`"`, `'`, `` ` ``) and whitespace
 *   before splitting. This means quoted keys are not preserved; inner dots/commas inside quotes
 *   are treated as separators (for example `a["b.c"]` -> `['a','b','c']`).
 * - Backslashes and other escape sequences are NOT interpreted and are preserved literally in tokens.
 * - Returns `undefined` for invalid paths that yield empty segments (leading, trailing, or consecutive
 *   separators), for example `'.a'`, `'a.'`, `'a..b'`, `'a[ ]'`, or `'a[1,]'`.
 * - The parser rejects unmatched brackets (an unmatched `]` or an unclosed `[`), e.g. `a]b` or `a[0` will return `undefined`.
 *
 * @param path - The path string to parse
 * @returns An array of path segments, or `undefined` when the path is invalid
 *
 * @example
 * pathToArray('a.b[0].c') // -> ['a', 'b', '0', 'c']
 * pathToArray('a["b.c"]') // -> ['a', 'b', 'c'] // quoted inner dots are split
 * pathToArray('a[ 0 ], b') // -> ['a', '0', 'b']
 */
export function pathToArray(path: string): string[] | undefined {
  // reject unmatched closing bracket or unclosed '['
  if (
    path
      .split('')
      .reduce(
        // count open and close brackets, reject if unbalanced
        (acc, c) => (c === '[' ? acc + 1 : c === ']' ? acc - 1 : acc),
        0
      ) !== 0
  ) {
    return undefined;
  }

  let cleanStr = path
    .replace(/[[\]]/g, (m) => (m === '[' ? '.' : '')) // '[' -> '.', ']' -> ''
    .replaceAll(',', '.') // replace commas with dots
    .replaceAll(`"`, '') // remove double quotes to handle quoted keys
    .replaceAll(`'`, '') // remove single quotes to handle quoted keys
    .replaceAll('`', '') // remove backticks to handle quoted keys
    .replaceAll(' ', ''); // remove all whitespace
  // special-case: if the original path starts with '[' then the replace produced a
  // leading '.' (e.g. '[0]' -> '.0'). In that case drop the leading dot so
  // bracket-only paths like '[0]' become ['0'] rather than being rejected as
  // having an empty leading token.
  if (path.trim().startsWith('[')) cleanStr = cleanStr.replace(/^[.]+/, '');
  const tokens = cleanStr.split('.').map(t => t.trim());
  if (tokens.some(t => t === '')) {
    return undefined;
  }
  // `split` on a non-empty string yields at least one token; an empty token
  // array would require external tampering with `String.prototype.split`.
  // Returning `tokens` directly keeps behaviour simple and predictable.
  return tokens;
}
