import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputComponent } from './number-input.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Store, StoreModule, INITIAL_STATE } from '@ngrx/store';


describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;
  let store: Store<any>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ NumberInputComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: INITIAL_STATE, useValue: {
        converter: {
          numberInput: {
            number: '',
            error: ''
          }
        }
      }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
