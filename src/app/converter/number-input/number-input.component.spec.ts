import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputComponent } from './number-input.component';
import { NO_ERRORS_SCHEMA, Input, Output, EventEmitter, Directive } from '@angular/core';

import { Store, StoreModule, INITIAL_STATE } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { By } from '@angular/platform-browser';
import * as fromStore from '../reducers';
import * as actions from './actions/number-input.actions';

@Directive({
  selector: 'app-number-input-card'
})
class MockNumberInputCard {
  @Input()
  number: string;

  @Input()
  error: string;

  @Output()
  numberChange: EventEmitter<any> = new EventEmitter();
}

describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;
  let mockStore: any;
  let mockNumberSubject: ReplaySubject<any>;
  let mockErrorSubject: ReplaySubject<any>;
  let testNumber = '12345';
  let testError = 'test_error';
 
  beforeEach(async(() => {
    mockNumberSubject = new ReplaySubject(10);
    mockErrorSubject = new ReplaySubject(10);
    mockStore = {
      select: (selector) => {
        let testState = {
          number: mockNumberSubject,
          error: mockErrorSubject 
        }
        return selector.projector(testState);
      },
      dispatch: () => {}
    }

    spyOn(mockStore, 'select').and.callThrough();
    spyOn(mockStore, 'dispatch').and.callThrough();
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ NumberInputComponent, MockNumberInputCard ],
      providers: [{provide: Store, useFactory: () => mockStore}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should pass value to child', () => {

    expect(mockStore.select).toHaveBeenCalledWith(fromStore.getNumber);
    expect(mockStore.select).toHaveBeenCalledWith(fromStore.getNumberInputError);
    mockNumberSubject.next(testNumber);
    mockErrorSubject.next(testError);
    fixture.detectChanges();

    let mockChildComponentEl = fixture.debugElement.query(By.directive(MockNumberInputCard));
    let mockNumberInpurCard = mockChildComponentEl.injector.get(MockNumberInputCard) as MockNumberInputCard;

    expect(mockNumberInpurCard.error).toEqual(testError);
    expect(mockNumberInpurCard.number).toEqual(testNumber);

  });

  it('Should emit event to parent', () => {
    
    let mockChildComponentEl = fixture.debugElement.query(By.directive(MockNumberInputCard));
    let mockNumberInpurCard = mockChildComponentEl.injector.get(MockNumberInputCard) as MockNumberInputCard;
    
    mockNumberInpurCard.numberChange.emit(testNumber);
    expect(mockStore.dispatch).toHaveBeenCalledWith(new actions.UpdateNumber(testNumber));
  });

});
