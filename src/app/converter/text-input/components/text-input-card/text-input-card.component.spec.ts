import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputCardComponent } from './text-input-card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TextInputCardComponent', () => {
  let component: TextInputCardComponent;
  let fixture: ComponentFixture<TextInputCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputCardComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
