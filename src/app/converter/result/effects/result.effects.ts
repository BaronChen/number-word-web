import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ResultActions, ResultActionTypes } from '../actions/result.actions';

@Injectable()
export class ResultEffects {

  // @Effect()
  // effect$ = this.actions$.ofType(TextInputActionTypes.TextInputAction);

  constructor(private actions$: Actions) {}
}
