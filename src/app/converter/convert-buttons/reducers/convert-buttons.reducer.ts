import { Action } from '@ngrx/store';
import { ConvertButtonsActions, ConvertButtonsActionTypes, ConvertTextToNumber } from '../actions/convert-buttons.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: ConvertButtonsActions): State {
  switch (action.type) {

    case ConvertButtonsActionTypes.ConvertNumberToText:
    case ConvertButtonsActionTypes.ConvertTextToNumber:
      return state;
    default:
      return state;
  }
}
