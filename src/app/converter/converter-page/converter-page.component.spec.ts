import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterPageComponent } from './converter-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


describe('ConverterPageComponent', () => {
  let component: ConverterPageComponent;
  let fixture: ComponentFixture<ConverterPageComponent>;
  let fakeObserver:any;

  beforeEach(async(() => {
    fakeObserver = {
      observe: (input) => {
        return Observable.of({
          matches: true
        });
      }
    }
    spyOn(fakeObserver, 'observe').and.callThrough()
    TestBed.configureTestingModule({
      declarations: [ ConverterPageComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide:BreakpointObserver, useValue: fakeObserver}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should subscribe to correct observable', () => {
    expect(fakeObserver.observe).toHaveBeenCalledWith([
      Breakpoints.Handset,
      Breakpoints.Tablet
    ]);

    expect(component.isMobile).toBe(true);
  });

});
