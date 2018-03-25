import * as numberInput from '../number-input/reducers/number-input.reducer';

import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
    numberInput: numberInput.State
}

export const reducers = {
    numberInput: numberInput.reducer
};

