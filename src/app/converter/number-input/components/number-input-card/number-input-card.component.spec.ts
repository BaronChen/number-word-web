import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputCardComponent } from './number-input-card.component';
import { Store, StoreModule } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NumberInputCardComponent', () => {
  let component: NumberInputCardComponent;
  let fixture: ComponentFixture<NumberInputCardComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ NumberInputCardComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputCardComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
