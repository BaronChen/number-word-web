import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ConverterButtonsGroupComponent } from './converter-buttons-group.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('ConverterButtonsGroupComponent', () => {
  let component: ConverterButtonsGroupComponent;
  let fixture: ComponentFixture<ConverterButtonsGroupComponent>;
  let fakeObserver:any;

  beforeEach(async(() => {
    fakeObserver = {
      observe: (input) => {
        return Observable.of({
          matches: true
        });
      }
    }
    TestBed.configureTestingModule({
      declarations: [ ConverterButtonsGroupComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide:BreakpointObserver, useValue: fakeObserver}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterButtonsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
