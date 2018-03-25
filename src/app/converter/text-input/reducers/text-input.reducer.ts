import { Action } from '@ngrx/store';
import { TextInputActions, TextInputActionTypes } from '../actions/text-input.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: TextInputActions): State {
  switch (action.type) {

    case TextInputActionTypes.TextInputAction:
      return state;


    default:
      return state;
  }
}
