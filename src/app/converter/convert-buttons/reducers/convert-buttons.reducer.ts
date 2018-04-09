import { Action } from '@ngrx/store';
import { ConvertButtonsActions, ConvertButtonsActionTypes, Convert } from '../actions/convert-buttons.actions';
import { ConversionType } from '../models';

export interface State {
  conversionType: ConversionType
}

export const initialState: State = {
  conversionType: ConversionType.numberToText
};

export function reducer(state = initialState, action: ConvertButtonsActions): State {
  switch (action.type) {

    case ConvertButtonsActionTypes.Convert:
      return state;
    case ConvertButtonsActionTypes.UpdateConversionType:
      return Object.assign({}, state, {conversionType: action.payload});
    default:
      return state;
  }
}
