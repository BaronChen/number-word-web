import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ConvertButtonsActions, ConvertButtonsActionTypes } from '../actions/convert-buttons.actions';

@Injectable()
export class ConvertButtonsEffects {

  //@Effect()
  //effect$ = this.actions$.ofType(ConvertButtonsActionTypes.ConvertButtonsAction);

  constructor(private actions$: Actions) {}
}
