
export const assertPrimitive = <T extends string | number | boolean>(
  value: unknown,
  message = 'Expected a primitive value (string, number, or boolean)'
): asserts value is T => {
  if (
    typeof value !== 'string' &&
    typeof value !== 'number' &&
    typeof value !== 'boolean'
  ) {
    throw new Error(message);
  }
};
