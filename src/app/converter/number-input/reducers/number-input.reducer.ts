import { Action } from '@ngrx/store';
import { NumberInputActions, NumberInputActionTypes } from '../actions/number-input.actions';

export interface State {
  number: string,
  error: string
}

export const initialState: State = {
  number: '',
  error: ''
};

export function reducer(state = initialState, action: NumberInputActions): State {
  switch (action.type) {
    case NumberInputActionTypes.UpdateNumber:
      return Object.assign({}, state, {number: action.payload});
    case NumberInputActionTypes.ClearNumber:
      return Object.assign({}, state, {number: ''});
    case NumberInputActionTypes.SetNumberInputError:
      return Object.assign({}, state, {error: action.payload});
    default:
      return state;
  }
}
