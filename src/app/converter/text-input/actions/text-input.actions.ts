import { Action } from '@ngrx/store';

export enum TextInputActionTypes {
  UpdateText = '[TextInput] Update Text',
  ClearText = '[TextInput] Clear Text',
}

export class UpdateText implements Action {
  readonly type = TextInputActionTypes.UpdateText;
  constructor(public payload: string) {

  }
}

export class ClearText implements Action {
  readonly type = TextInputActionTypes.ClearText;
}

export type TextInputActions = UpdateText | ClearText;
