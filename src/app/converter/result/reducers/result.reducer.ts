import { Action } from '@ngrx/store';
import { ResultActions, ResultActionTypes } from '../actions/result.actions';

export interface State {
  result: string
}

export const initialState: State = {
  result: ''
};

export function reducer(state = initialState, action: ResultActions): State {
  switch (action.type) {

    case ResultActionTypes.UpdateResult:
      return Object.assign({}, state, {result: action.payload});

    case ResultActionTypes.ClearResult:
      return Object.assign({}, state, {result: ''});

    default:
      return state;
  }
}
