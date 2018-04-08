import * as numberInput from '../number-input/reducers/number-input.reducer';
import * as result from '../result/reducers/result.reducer';
import * as convertButtons from '../convert-buttons/reducers/convert-buttons.reducer';

import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
    numberInput: numberInput.State,
    result: result.State,
    convertButtons: convertButtons.State
}

export const reducers = {
    numberInput: numberInput.reducer,
    result: result.reducer,
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

export const getNumberInputError = createSelector(
    getNumberInputState,
    state => state.error
);

export const getResultState = createSelector(
    getConverterState,
    state => state.result
);

export const getResult = createSelector(
    getResultState,
    state => state.result
);
