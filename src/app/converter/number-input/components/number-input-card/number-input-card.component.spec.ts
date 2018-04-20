import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputCardComponent } from './number-input-card.component';
import { NO_ERRORS_SCHEMA, ChangeDetectionStrategy, DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';

describe('NumberInputCardComponent', () => {
  let component: NumberInputCardComponent;
  let fixture: ComponentFixture<NumberInputCardComponent>;
  let testError = 'testError';
  let testNumber = '12345';

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ NumberInputCardComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).overrideComponent(NumberInputCardComponent, {
      set: {  changeDetection: ChangeDetectionStrategy.Default  }
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputCardComponent);
    component = fixture.componentInstance;
    component.error = testError;
    component.number = testNumber;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render base on inputs', () => {
    let numberEl = fixture.debugElement.query(By.css('input'));
    let errorEl = fixture.debugElement.query(By.css('mat-error'));

    expect(numberEl.nativeElement.value).toEqual(testNumber);
    expect(errorEl.nativeElement.textContent.trim()).toEqual(testError);
  });

  it('should fire event when input changes', () => {
    spyOn(component.numberChange, 'emit').and.callFake(() => {});
    const newTestNumber = '56789';
    let numberEl = fixture.debugElement.query(By.css('input'));
    numberEl.nativeElement.value = newTestNumber;
    numberEl.nativeElement.dispatchEvent(new Event('input'));
    numberEl.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.numberChange.emit).toHaveBeenCalledWith(newTestNumber);
    })
  });

});
