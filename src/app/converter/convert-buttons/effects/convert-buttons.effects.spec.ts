import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';
import { Store, StoreModule, INITIAL_STATE } from '@ngrx/store';

import { ConvertButtonsEffects } from './convert-buttons.effects';
import { ConverterService } from '../../services/converter.service';
import { ConversionType } from '../models';
import * as buttonActions from '../actions/convert-buttons.actions';
import * as numberInputActions from '../../number-input/actions/number-input.actions';
import * as resultActions from '../../result/actions/result.actions';
import {Word, MyNumber} from '../../models/';
import { ReplaySubject } from 'rxjs/ReplaySubject';

describe('ConvertButtonsService', () => {
  let actions$: Observable<any>;
  let effects: ConvertButtonsEffects;
  let testInput = 'test_input';
  let testResult = 'test_result';
  let testError = 'test_error';
  let mockConverterService:any;
  let store: Store<any>;

  const configTestBed = (testConversionType: ConversionType) => {

    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        ConvertButtonsEffects,
        provideMockActions(() => actions$),
        { provide: ConverterService, useFactory: ()=> mockConverterService },
        {
          provide: INITIAL_STATE, useValue: {
            converter: {
              convertButtons: {
                conversionType: testConversionType
              },
              numberInput: {
                number: testInput
              }
            }
          }
        }
      ]
    });

    effects = TestBed.get(ConvertButtonsEffects);
    store = TestBed.get(Store);
  }

  beforeEach(() => {

    mockConverterService = {
      convertNumberToText: () => {
        return Observable.of({
          text: testResult
        })
      },
      convertTextToNumber: () => {
        return Observable.of({
          number: testResult
        })
      },
    }
  });

  it('should be created', () => {
    configTestBed(ConversionType.numberToText);
    expect(effects).toBeTruthy();
  });

  it('should send request and handle response when convert number to text', () => {
    let testConversionType = ConversionType.numberToText;
    configTestBed(testConversionType);

    spyOn(mockConverterService, 'convertNumberToText').and.callThrough();
    spyOn(store, 'dispatch').and.callFake(() => {});

    let replaySubject = new ReplaySubject(1);
    actions$ = replaySubject.asObservable();
    replaySubject.next(new buttonActions.Convert());
    
    effects.convertNumberEffect.subscribe(action => {
      expect(mockConverterService.convertNumberToText).toHaveBeenCalledWith({number: testInput});
      expect(store.dispatch).toHaveBeenCalledWith(new numberInputActions.SetNumberInputError(''));
      expect(action).toEqual(new resultActions.UpdateResult(testResult));
    });
 
  });
  
  it('should send request and handle error when convert number to text', () => {
    let testConversionType = ConversionType.numberToText;
    configTestBed(testConversionType);

    spyOn(mockConverterService, 'convertNumberToText').and.callFake(() => Observable.throw(testError));
    spyOn(store, 'dispatch').and.callFake(() => {});

    let replaySubject = new ReplaySubject(1);
    actions$ = replaySubject.asObservable();
    replaySubject.next(new buttonActions.Convert());
    
    effects.convertNumberEffect.subscribe(action => {
      expect(mockConverterService.convertNumberToText).toHaveBeenCalledWith({number: testInput});
      expect(store.dispatch).toHaveBeenCalledWith(new numberInputActions.SetNumberInputError(''));
      expect(action).toEqual(new numberInputActions.SetNumberInputError(testError));
    });
  });

  it('should send request and handle response when convert text to number', () => {
    let testConversionType = ConversionType.textToNumber;
    configTestBed(testConversionType);

    spyOn(mockConverterService, 'convertTextToNumber').and.callThrough();
    spyOn(store, 'dispatch').and.callFake(() => {});

    let replaySubject = new ReplaySubject(1);
    actions$ = replaySubject.asObservable();
    replaySubject.next(new buttonActions.Convert());
    
    effects.convertNumberEffect.subscribe(action => {
      expect(mockConverterService.convertTextToNumber).toHaveBeenCalledWith({text: testInput});
      expect(store.dispatch).toHaveBeenCalledWith(new numberInputActions.SetNumberInputError(''));
      expect(action).toEqual(new resultActions.UpdateResult(testResult));
    });
 
  });
  
  it('should send request and handle error when convert number to text', () => {
    let testConversionType = ConversionType.textToNumber;
    configTestBed(testConversionType);

    spyOn(mockConverterService, 'convertTextToNumber').and.callFake(() => Observable.throw(testError));
    spyOn(store, 'dispatch').and.callFake(() => {});

    let replaySubject = new ReplaySubject(1);
    actions$ = replaySubject.asObservable();
    replaySubject.next(new buttonActions.Convert());
    
    effects.convertNumberEffect.subscribe(action => {
      expect(mockConverterService.convertTextToNumber).toHaveBeenCalledWith({text: testInput});
      expect(store.dispatch).toHaveBeenCalledWith(new numberInputActions.SetNumberInputError(''));
      expect(action).toEqual(new numberInputActions.SetNumberInputError(testError));
    });
  });

});
