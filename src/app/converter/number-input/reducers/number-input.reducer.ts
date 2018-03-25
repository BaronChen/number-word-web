import { Action } from '@ngrx/store';
import { NumberInputActions, NumberInputActionTypes } from '../actions/number-input.actions';

export interface State {
  number: string
}

export const initialState: State = {
  number: ''
};

export function reducer(state = initialState, action: NumberInputActions): State {
  switch (action.type) {
    case NumberInputActionTypes.UpdateNumber:
      return Object.assign({}, state, {number: action.payload});
    case NumberInputActionTypes.ClearNumber:
      return Object.assign({}, state, {number: ''});
    default:
      return state;
  }
}
