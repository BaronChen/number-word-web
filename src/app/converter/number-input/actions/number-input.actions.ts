import { Action } from '@ngrx/store';

export enum NumberInputActionTypes {
  UpdateNumber = '[NumberInput] Update Number',
  ClearNumber = '[NumberInput] Clear Number'
}

export class UpdateNumber implements Action {
  readonly type = NumberInputActionTypes.UpdateNumber;
  constructor(public payload: string){

  }
}

export class ClearNumber implements Action {
  readonly type = NumberInputActionTypes.ClearNumber;
}

export type NumberInputActions = UpdateNumber | ClearNumber;
