import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { TextInputActions, TextInputActionTypes } from '../actions/text-input.actions';

@Injectable()
export class TextInputEffects {

  // @Effect()
  // effect$ = this.actions$.ofType(TextInputActionTypes.TextInputAction);

  constructor(private actions$: Actions) {}
}
