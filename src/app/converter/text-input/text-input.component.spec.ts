import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputComponent } from './text-input.component';
import { Store, StoreModule, INITIAL_STATE } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TextInputComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: INITIAL_STATE, useValue: {
        converter: {
          textInput: {
            text: '',
            error: ''
          }
        }
      }}]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
