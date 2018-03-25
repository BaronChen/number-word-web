import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { NumberInputActions, NumberInputActionTypes } from '../actions/number-input.actions';

@Injectable()
export class NumberInputEffects {

  // @Effect()
  // effect$ = this.actions$.ofType(NumberInputActionTypes.UpdateNumber);

  constructor(private actions$: Actions) {}
}
