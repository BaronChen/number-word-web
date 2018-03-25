import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputFieldComponent } from './number-input-field.component';
import { Store, StoreModule } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NumberInputFieldComponent', () => {
  let component: NumberInputFieldComponent;
  let fixture: ComponentFixture<NumberInputFieldComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ NumberInputFieldComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputFieldComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
