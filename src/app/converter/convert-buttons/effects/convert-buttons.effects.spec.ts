import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { ConvertButtonsEffects } from './convert-buttons.effects';

describe('ConvertButtonsService', () => {
  let actions$: Observable<any>;
  let effects: ConvertButtonsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConvertButtonsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ConvertButtonsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
