import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';
import { Store, StoreModule } from '@ngrx/store';

import { ConvertButtonsEffects } from './convert-buttons.effects';
import {ConverterService} from '../../services/converter.service';
describe('ConvertButtonsService', () => {
  let actions$: Observable<any>;
  let effects: ConvertButtonsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        ConvertButtonsEffects,
        provideMockActions(() => actions$),
        {provide:ConverterService, useValue: {}}
      ]
    });

    effects = TestBed.get(ConvertButtonsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
