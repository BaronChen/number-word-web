import { Action } from '@ngrx/store';

export enum TextInputActionTypes {
  UpdateText = '[TextInput] Update Text',
  ClearText = '[TextInput] Clear Text',
  SetTextInputError = '[TextInput] Set Text Input Error'
}

export class UpdateText implements Action {
  readonly type = TextInputActionTypes.UpdateText;
  constructor(public payload: string) { }
}

export class ClearText implements Action {
  readonly type = TextInputActionTypes.ClearText;
}

export class SetTextInputError implements Action {
  readonly type = TextInputActionTypes.SetTextInputError;
  constructor(public payload: string) { }
}


export type TextInputActions = UpdateText | ClearText | SetTextInputError;
