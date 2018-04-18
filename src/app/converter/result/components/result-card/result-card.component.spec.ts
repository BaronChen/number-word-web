import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { ResultCardComponent } from './result-card.component';
import { NO_ERRORS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TextInputCardComponent', () => {
  let component: ResultCardComponent;
  let fixture: ComponentFixture<ResultCardComponent>;
  let testResult = 'test_result';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultCardComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .overrideComponent(ResultCardComponent, {
      set: {  changeDetection: ChangeDetectionStrategy.Default  }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render result correctly', () => {
    component.result = testResult;
    fixture.detectChanges();
    let pEl = fixture.debugElement.query(By.css('p'));
    expect(pEl.nativeElement.textContent.trim()).toBe(testResult);

  });
});
