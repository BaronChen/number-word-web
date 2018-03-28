import * as numberInput from '../number-input/reducers/number-input.reducer';
import * as textInput from '../text-input/reducers/text-input.reducer';
import * as convertButtons from '../convert-buttons/reducers/convert-buttons.reducer';

import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
    numberInput: numberInput.State,
    textInput: textInput.State,
    convertButtons: convertButtons.State
}

export const reducers = {
    numberInput: numberInput.reducer,
    textInput: textInput.reducer,
    convertButtons: convertButtons.reducer
};

export const getConverterState = createFeatureSelector<State>('converter');

export const getNumberInputState = createSelector(
    getConverterState,
    state => state.numberInput
);

export const getNumber = createSelector(
    getNumberInputState,
    state => state.number
);

export const getTextInputState = createSelector(
    getConverterState,
    state => state.textInput
);


export const getText = createSelector(
    getTextInputState,
    state => {
        return state.text;
    }
);

