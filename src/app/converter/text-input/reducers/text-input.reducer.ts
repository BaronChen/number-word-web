import { Action } from '@ngrx/store';
import { TextInputActions, TextInputActionTypes } from '../actions/text-input.actions';

export interface State {
  text: string
}

export const initialState: State = {
  text: ''
};

export function reducer(state = initialState, action: TextInputActions): State {
  switch (action.type) {

    case TextInputActionTypes.UpdateText:
      return Object.assign({}, state, {text: action.payload});

    case TextInputActionTypes.ClearText:
      return Object.assign({}, state, {text: ''});

    default:
      return state;
  }
}
