/**
 * this is an adopted copy of the experimental version in angular as of 2024-10-12
 * so that I can already create some demos before it lands in the official release
 * It is adopted because I don't have access to all the same internals.
 */

import { Injector, Signal, type ValueEqualityFn, type WritableSignal } from '@angular/core';


/**
 * Status type union of a `Resource`.
 *
 * @experimental
 */
export type ResourceStatus = 'idle' | 'error' | 'loading' | 'refreshing' | 'resolved' | 'local';

/**
 * A Resource is an asynchronous dependency (for example, the results of an API call) that is
 * managed and delivered through signals.
 *
 * The usual way of creating a `Resource` is through the `resource` function, but various other APIs
 * may present `Resource` instances to describe their own concepts.
 *
 * @experimental
 */
export interface Resource<T> {
  /**
   * The current value of the `Resource`, or `undefined` if there is no current value.
   */
  readonly value: Signal<T | undefined>;
  readonly status: Signal<ResourceStatus>;
  readonly error: Signal<unknown>;

  /**
   * Whether this resource is running an asynchronous operation (for example, loading a new value
   * for the resource).
   *
   * This function is reactive.
   */
  isLoading(): boolean;

  /**
   * Whether this resource has a valid current value.
   *
   * This function is reactive.
   */
  hasValue(): this is Resource<T> & {value: Signal<T>};

  /**
   * Instructs the resource to re-request any asynchronous dependency it may have.
   *
   * Note that the resource will not enter its refreshing state until the actual backend request is
   * made.
   *
   * @returns true if a refetch was initiated, false if a refetch was unnecessary or unsupported
   */
  refresh(): boolean;
}

/**
 * A `Resource` with a mutable value.
 *
 * Overwriting the value of a resource sets it to the 'local' state.
 *
 * @experimental
 */
export interface WritableResource<T> extends Resource<T> {
  readonly value: WritableSignal<T | undefined>;
  hasValue(): this is WritableResource<T> & {value: WritableSignal<T>};
  asReadonly(): Resource<T>;
}

/**
 * Parameter to a `ResourceLoader` which gives the request and other options for the current loading
 * operation.
 *
 * @experimental
 */
export interface ResourceLoaderParams<R> {
  request: Exclude<NoInfer<R>, undefined>;
  abortSignal: AbortSignal;
  previous: {
    status: ResourceStatus;
  };
}

/**
 * Loading function for a `Resource`.
 *
 * @experimental
 */
export type ResourceLoader<T, R> = (param: ResourceLoaderParams<R>) => Promise<T>;

/**
 * Options to the `resource` function, for creating a resource.
 *
 * @experimental
 */
export interface ResourceOptions<T, R> {
  /**
   * A reactive function which determines the request to be made. Whenever the request changes, the
   * loader will be triggered to fetch a new value for the resource.
   *
   * If a request function isn't provided, the loader won't rerun unless the resource is refreshed.
   */
  request?: () => R;

  /**
   * Loading function which returns a `Promise` of the resource's value for a given request.
   */
  loader: ResourceLoader<T, R>;

  /**
   * Equality function used to compare the return value of the loader.
   */
  equal?: ValueEqualityFn<T>;

  /**
   * Overrides the `Injector` used by `resource`.
   */
  injector?: Injector;
}
