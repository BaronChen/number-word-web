import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { ResultEffects } from './result.effects';

describe('TextInputService', () => {
  let actions$: Observable<any>;
  let effects: ResultEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResultEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ResultEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
