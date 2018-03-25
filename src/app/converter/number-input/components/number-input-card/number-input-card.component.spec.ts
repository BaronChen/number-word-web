import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputCardComponent } from './number-input-card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NumberInputCardComponent', () => {
  let component: NumberInputCardComponent;
  let fixture: ComponentFixture<NumberInputCardComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ NumberInputCardComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputCardComponent);
    component = fixture.componentInstance;
   
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
