import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ConvertButtonsActions, ConvertButtonsActionTypes, ConvertNumberToText, ConvertTextToNumber } from '../actions/convert-buttons.actions';
import { UpdateText } from '../../text-input/actions/text-input.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';
import { Store, Action } from '@ngrx/store';
import { ConverterService } from '../../services/converter.service';
import { Word, MyNumber } from '../../models'
import { SetNumberInputError, UpdateNumber, ClearNumber } from '../../number-input/actions/number-input.actions';

@Injectable()
export class ConvertButtonsEffects {

  constructor(private actions$: Actions, private store$: Store<any>, private converterService: ConverterService) {}


  @Effect()
  convertNumberEffect: Observable<Action> = 
    this.actions$.ofType(ConvertButtonsActionTypes.ConvertNumberToText).withLatestFrom(this.store$.select(state => state.converter.numberInput.number))
      .mergeMap(
        ([action, number]: [ConvertNumberToText, string]) => {
            this.store$.dispatch(new SetNumberInputError(''));
            return this.converterService.convertNumberToText({number: number}).map((data: Word) => {
              return new UpdateText(data.text);
            }).catch(err => {
              //TODO: Fire error action
              return Observable.of(new SetNumberInputError(err));
            });;
        }
      );

}
