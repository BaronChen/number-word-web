import { Action } from '@ngrx/store';

export enum ConvertButtonsActionTypes {
  ConvertNumberToText = '[ConvertButtons] Convert number to Text',
  ConvertTextToNumber = '[ConvertButtons] Convert text to number'  
}

export class ConvertNumberToText implements Action {
  readonly type = ConvertButtonsActionTypes.ConvertNumberToText;
}


export class ConvertTextToNumber implements Action {
  readonly type = ConvertButtonsActionTypes.ConvertTextToNumber;
}

export type ConvertButtonsActions = ConvertNumberToText | ConvertTextToNumber;
