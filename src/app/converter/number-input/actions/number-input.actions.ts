import { Action } from '@ngrx/store';

export enum NumberInputActionTypes {
  UpdateNumber = '[NumberInput] Update Number',
  ClearNumber = '[NumberInput] Clear Number',
  SetNumberInputError = '[NumberInput] Set Number Input Error'
}

export class UpdateNumber implements Action {
  readonly type = NumberInputActionTypes.UpdateNumber;
  constructor(public payload: string){

  }
}

export class ClearNumber implements Action {
  readonly type = NumberInputActionTypes.ClearNumber;
}

export class SetNumberInputError implements Action {
  readonly type = NumberInputActionTypes.SetNumberInputError;
  constructor(public payload: string) {}
}

export type NumberInputActions = UpdateNumber | ClearNumber | SetNumberInputError;
