import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { NumberInputEffects } from './number-input.effects';

describe('NumberInputService', () => {
  let actions$: Observable<any>;
  let effects: NumberInputEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NumberInputEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(NumberInputEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
