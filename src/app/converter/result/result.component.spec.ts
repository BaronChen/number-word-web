import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { Store, StoreModule, INITIAL_STATE } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('TextInputComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ResultComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: INITIAL_STATE, useValue: {
        converter: {
          result: {
            result: ''
          }
        }
      }}]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
