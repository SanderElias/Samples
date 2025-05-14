/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { cloneDeep } from './clone-deep';
import { isObject } from './is-object';

export type IterableMergeStrategy = 'concat' | 'replace' | 'merge';

export interface MergeDeepOptions {
  /**
   * Strategy to merge arrays, maps, and sets.
   * - `'concat'` will concatenate,
   * - `'replace'` will replace the target with the source,
   * - `'merge'` will merge the two.
   * - A function can be provided as well that conditionally selects one of the options above, depending on the property path
   */
  iterableMergeStrategy?: IterableMergeStrategy | ((path: string[]) => IterableMergeStrategy);

  /**
   * Skip assigning undefined values from the source object. defaults to `false`.
   */
  skipAssignUndefined?: boolean;
}

/**
 * Deep merge two objects. The source object takes precedence over the target object.
 *
 * @param target object to merge into
 * @param source object to merge (takes precedence)
 * @param options iterableMergeStrategy: 'concat' | 'replace' | 'merge' - default: 'concat'
 * @returns new object where all values of both are present, in case of conflicts, the source value is used.
 */
export const mergeDeep = <A extends {}, B extends {}>(
  target: A,
  source: B,
  options: MergeDeepOptions = {},
  path: string[] = []
): DeepMergeObjects<A, B> => {
  const resolveMergeStrategy = (propertyPath: string[]): IterableMergeStrategy =>
    typeof options.iterableMergeStrategy === 'function'
      ? options.iterableMergeStrategy(propertyPath)
      : (options.iterableMergeStrategy ?? 'concat');

  const skipAssignUndefined = options.skipAssignUndefined ?? false;
  const result: Record<string, unknown> = cloneDeep(target);
  for (const [key, value] of Object.entries(source)) {
    // cast to any, as we are going to check for the type later on. TS will not allow us to do this otherwise.
    const valueToMerge = value as any;
    const currentValue = result[key] as any;
    if (skipAssignUndefined && valueToMerge === undefined) {
      continue;
    }

    const childPath = [...path, key];

    if (Array.isArray(valueToMerge)) {
      const mergeStrategy = resolveMergeStrategy(childPath);
      switch (mergeStrategy) {
        case 'concat': {
          result[key] = (currentValue ?? []).concat(valueToMerge);
          break;
        }
        case 'replace': {
          result[key] = cloneDeep(valueToMerge);
          break;
        }
        case 'merge': {
          result[key] = deepMergeArray(currentValue ?? [], valueToMerge, options, childPath);
          break;
        }
      }
    } else if (valueToMerge instanceof Set) {
      const mergeStrategy = resolveMergeStrategy(childPath);
      if (mergeStrategy === 'replace' || currentValue === undefined) {
        result[key] = new Set(valueToMerge);
      } else {
        if (!(currentValue instanceof Set)) {
          throw new Error('[deepMergeObjects] Cannot merge or concat a Set with a non-Set');
        }
        result[key] = new Set([...currentValue, ...valueToMerge]);
      }
    } else if (valueToMerge instanceof Map) {
      const mergeStrategy = resolveMergeStrategy(childPath);
      if (mergeStrategy === 'replace' || currentValue === undefined) {
        result[key] = new Map(valueToMerge);
      } else {
        if (!(currentValue instanceof Map)) {
          throw new Error('[deepMergeObjects] Cannot merge or concat a Map with a non-Map');
        }
        result[key] = new Map([...currentValue, ...valueToMerge]);
      }
    } else if (isObject(valueToMerge)) {
      result[key] = mergeDeep(isObject(currentValue) ? currentValue : {}, valueToMerge, options, childPath);
    } else if (valueToMerge instanceof Date) {
      result[key] = new Date(valueToMerge);
    } else {
      // only real primitives left, we don't need to clone them.
      result[key] = valueToMerge;
    }
  }

  return result as DeepMergeObjects<A, B>;
};

/**
 * returns an array, by adding the non-sparsely populated values from the target and source array
 * @param target array to merge
 * @param source array to merge (takes precedence)
 * @returns new array where all values of both are present, in the same order. in case of conflicts, the source value is used.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deepMergeArray = <T>(target: T[], source: T[], options: MergeDeepOptions = {}, path: string[] = []): T[] => {
  const result: T[] = target.reduce<T[]>((acc, value, index) => {
    acc[index] = cloneDeep(value); // clone in the original value.

    return acc;
  }, []);
  source.forEach((value, index) => {
    let valueToMerge = result[index] as any;
    if (Array.isArray(value)) {
      valueToMerge = deepMergeArray(valueToMerge ?? [], value, options, path);
    } else if (isObject(value)) {
      valueToMerge = mergeDeep(valueToMerge ?? {}, value as Record<string, unknown>, options, path);
    } else {
      valueToMerge = cloneDeep(value);
    }
    result[index] = valueToMerge;
  });

  return result;
};

/** helper to merge types into each other. */
export type DeepMergeObjects<Target, Source> = Target extends NonObject
  ? Target
  : Source extends NonObject
    ? Source
    : {
        [K in keyof (Target & Source)]: K extends keyof Source
          ? K extends keyof Target
            ? DeepMergeObjects<Target[K], Source[K]>
            : Source[K]
          : K extends keyof Target
            ? Target[K]
            : never;
      };

export type NonObject =
  | null
  | undefined
  | boolean
  | number
  | string
  | unknown[]
  | Function
  | Date
  | Set<unknown>
  | Map<unknown, unknown>;
