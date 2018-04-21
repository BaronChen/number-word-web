import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertButtonsComponent } from './convert-buttons.component';
import { Store, StoreModule, INITIAL_STATE } from '@ngrx/store';
import { NO_ERRORS_SCHEMA, Directive, Input, Output, EventEmitter} from '@angular/core'
import { By } from '@angular/platform-browser';
import { ConversionType } from './models';
import * as actions from './actions/convert-buttons.actions';

@Directive({
  selector: 'app-converter-buttons-group'
})
class MockConvertButtonGroup {
  @Input()
  conversionType: ConversionType;

  @Output()
  convertClick: EventEmitter<any> = new EventEmitter();

  @Output()
  updateConversionType: EventEmitter<any> = new EventEmitter();
}


describe('ConvertButtonsComponent', () => {
  let component: ConvertButtonsComponent;
  let fixture: ComponentFixture<ConvertButtonsComponent>;
  let store: Store<any>;
  let testConversionType = ConversionType.textToNumber;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ConvertButtonsComponent, MockConvertButtonGroup ],
      providers: [{provide: INITIAL_STATE, useValue: {
        converter: {
          convertButtons: {
            conversionType: testConversionType
          }
        }
      }}]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertButtonsComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callFake(() => {})
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass value to child correctly', () => {
    let mockChildComponentEl = fixture.debugElement.query(By.directive(MockConvertButtonGroup));
    let mockConvertButtonGroup = mockChildComponentEl.injector.get(MockConvertButtonGroup) as MockConvertButtonGroup;

    expect(mockConvertButtonGroup.conversionType).toEqual(testConversionType);
  });

  it('should listen to events emit from child', () => {
    let mockChildComponentEl = fixture.debugElement.query(By.directive(MockConvertButtonGroup));
    let mockConvertButtonGroup = mockChildComponentEl.injector.get(MockConvertButtonGroup) as MockConvertButtonGroup;

    mockConvertButtonGroup.convertClick.emit();
    expect(store.dispatch).toHaveBeenCalledWith(new actions.Convert());


    mockConvertButtonGroup.updateConversionType.emit(testConversionType);
    expect(store.dispatch).toHaveBeenCalledWith(new actions.UpdateConversionType(testConversionType));
  });

});
