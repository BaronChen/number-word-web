import { Action } from '@ngrx/store';
import { ConversionType } from '../models';

export enum ConvertButtonsActionTypes {
  Convert = '[ConvertButtons] Convert',
  UpdateConversionType = '[ConvertButtons] Update ConversionType'  
}

export class Convert implements Action {
  readonly type = ConvertButtonsActionTypes.Convert;
}


export class UpdateConversionType implements Action {
  readonly type = ConvertButtonsActionTypes.UpdateConversionType;
  constructor(public payload: ConversionType) { }
}

export type ConvertButtonsActions = Convert | UpdateConversionType;
