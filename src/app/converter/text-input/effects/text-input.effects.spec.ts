import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { TextInputEffects } from './text-input.effects';

describe('TextInputService', () => {
  let actions$: Observable<any>;
  let effects: TextInputEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TextInputEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TextInputEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
