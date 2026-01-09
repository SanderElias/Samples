import type { WritableSignal } from '@angular/core';
import { type Observable, firstValueFrom } from 'rxjs';

type ActionType = 'create' | 'update' | 'delete';

type InitialAction = { running: false };
type RunningAction = { running: true; actionType: ActionType };
export type SuccessResult = { success: true; data: unknown };
export type FailureResult = { success: false; error: Error };
export type SuccessFulAction = { running: false; actionType: ActionType; lastResult: SuccessResult };
export type FailedAction = { running: false; actionType: ActionType; lastResult: FailureResult };
export type Action = InitialAction | RunningAction | SuccessFulAction | FailedAction;

export type Result = SuccessResult | FailureResult;

interface EndpointHandlerParams {
  serverCall: Observable<unknown>;
  actionType: ActionType;
  actionSignal: WritableSignal<Action>;
}

export const endpointHandler = ({ serverCall, actionType, actionSignal }: EndpointHandlerParams): Promise<Result> => {
  if (actionSignal().running) {
    // prevent concurrent actions
    throw new Error('Another action is already running');
  }
  // set action to running, and clear previous results
  actionSignal.set({ running: true, actionType });
  return firstValueFrom(serverCall)
    .then(data => {
      const lastResult: SuccessResult = { success: true, data };
      actionSignal.set({ running: false, actionType, lastResult });
      return lastResult;
    })
    .catch(e => {
      const lastResult: FailureResult = { success: false, error: e };
      actionSignal.set({ running: false, actionType, lastResult });
      return lastResult;
    });
};

export const successHandler =
  (action: (data: unknown) => void) =>
  (result: Result): Result => {
    if (result.success) {
      action(result.data);
    }
    return result;
  };

export const errorHandler =
  (action: (error: Error) => void) =>
  (result: Result): Result => {
    if (!result.success) {
      action(result.error);
    }
    return result;
  };
