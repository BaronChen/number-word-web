import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ConvertButtonsActions, ConvertButtonsActionTypes, ConvertNumberToText, ConvertTextToNumber } from '../actions/convert-buttons.actions';
import { UpdateText } from '../../text-input/actions/text-input.actions';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';
import { Store, Action } from '@ngrx/store';
import { ConverterService } from '../../services/converter.service';
import { Word, MyNumber } from '../../models'
import * as fromConverter from '../../reducers';

@Injectable()
export class ConvertButtonsEffects {

  constructor(private actions$: Actions, private store$: Store<any>, private converterService: ConverterService) {}


  @Effect()
  convertNumberEffect: Observable<Action> = 
    this.actions$.ofType(ConvertButtonsActionTypes.ConvertNumberToText).withLatestFrom(this.store$.select(state => {
      return state.converter.numberInput.number;
    })).mergeMap(
      ([action, number]: [ConvertNumberToText, string]) => {
          return this.converterService.convertNumberToText({number: number}).map((data: Word) => {
            return new UpdateText(data.text);
          });
      }
    ).catch(err => {
      alert(err);
      //TODO: Fire error action
      return of(new UpdateText('Error!'));
    });

}
