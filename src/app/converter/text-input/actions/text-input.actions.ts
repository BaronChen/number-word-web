import { Action } from '@ngrx/store';

export enum TextInputActionTypes {
  TextInputAction = '[TextInput] Action'
}

export class TextInput implements Action {
  readonly type = TextInputActionTypes.TextInputAction;
}

export type TextInputActions = TextInput;
