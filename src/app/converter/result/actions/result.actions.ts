import { Action } from '@ngrx/store';

export enum ResultActionTypes {
  UpdateResult = '[Result] Update Result',
  ClearResult = '[Result] Clear Result'
}

export class UpdateResult implements Action {
  readonly type = ResultActionTypes.UpdateResult;
  constructor(public payload: string) { }
}

export class ClearResult implements Action {
  readonly type = ResultActionTypes.ClearResult;
}

export type ResultActions = UpdateResult | ClearResult;
