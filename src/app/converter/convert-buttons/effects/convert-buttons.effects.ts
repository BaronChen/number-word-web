import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ConvertButtonsActions, ConvertButtonsActionTypes, Convert } from '../actions/convert-buttons.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';
import { Store, Action } from '@ngrx/store';
import { ConverterService } from '../../services/converter.service';
import { Word, MyNumber } from '../../models'
import { SetNumberInputError, UpdateNumber, ClearNumber } from '../../number-input/actions/number-input.actions';
import { UpdateResult, ClearResult } from '../../result/actions/result.actions';
import { getNumber, getResult, getConversionType } from '../../reducers';
import { ConversionType } from '../models';

@Injectable()
export class ConvertButtonsEffects {

  constructor(private actions$: Actions, private store$: Store<any>, private converterService: ConverterService) { }


  @Effect()
  convertNumberEffect: Observable<Action> =
    this.actions$.ofType(ConvertButtonsActionTypes.Convert)
      .withLatestFrom(this.store$.select(getNumber))
      .withLatestFrom(this.store$.select(getConversionType))
      .mergeMap(
        ([[action, number], convertionType]: [[Convert, string], ConversionType]) => {
          this.store$.dispatch(new SetNumberInputError(''));
          if (convertionType === ConversionType.numberToText) {
            return this.converterService.convertNumberToText({ number: number }).map((data: Word) => {
              return new UpdateResult(data.text);
            }).catch(err => {
              //TODO: Fire error action
              return Observable.of(new SetNumberInputError(err));
            });
          }
          else
          {
            return this.converterService.convertTextToNumber({ text: number }).map((data: MyNumber) => {
              return new UpdateResult(data.number);
            }).catch(err => {
              //TODO: Fire error action
              return Observable.of(new SetNumberInputError(err));
            });
          }

        }
      );
}
