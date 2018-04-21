import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { ConverterButtonsGroupComponent } from './converter-buttons-group.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ConversionType } from '../../models';
import { By } from '@angular/platform-browser';

describe('ConverterButtonsGroupComponent', () => {
  let component: ConverterButtonsGroupComponent;
  let fixture: ComponentFixture<ConverterButtonsGroupComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ ConverterButtonsGroupComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    }).overrideComponent(ConverterButtonsGroupComponent, {
      set: {  changeDetection: ChangeDetectionStrategy.Default  }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterButtonsGroupComponent);
    component = fixture.componentInstance;
    component.conversionType = ConversionType.textToNumber;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render select base on input', () => {
    let els = fixture.debugElement.queryAll(By.css('mat-option'));
    expect(els[0].nativeElement.textContent.trim()).toEqual('Numeric To Text');
    
    expect(els[1].nativeElement.textContent.trim()).toEqual('Text To Numeric');
  });

  it('should handle click event', () => {
    spyOn(component.convertClick, 'emit').and.callFake(() => {});
    let el = fixture.debugElement.query(By.css('button'));
    
    el.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.convertClick.emit).toHaveBeenCalledTimes(1);
    })
  })
});
