import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { Store, StoreModule, INITIAL_STATE } from '@ngrx/store';
import { NO_ERRORS_SCHEMA, Directive, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';


@Directive({
  selector: 'app-result-card'
})
class MockResultCard {
  @Input()
  result: string;
}

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let mockStore: any;
  let mockStoreReplaySubject: ReplaySubject<any>;

  beforeEach(async() => {
    mockStoreReplaySubject = new ReplaySubject(1);
    mockStore = {
      select: () => mockStoreReplaySubject.asObservable() 
    }

    TestBed.configureTestingModule({
      imports: [  ],
      declarations: [ ResultComponent, MockResultCard ],
      providers: [{provide: Store, useFactory: () => mockStore }]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get result state input correctly', () => {
    const testResult = "test_result";
    mockStoreReplaySubject.next(testResult);

    component.result$.subscribe(data => {
      expect(data).toEqual(testResult);
    });
  });

  it('should pass result to child', async(() => {
    const testResult = "test_result";
    mockStoreReplaySubject.next(testResult);
    fixture.detectChanges();
    let mockChildComponentEl = fixture.debugElement.query(By.directive(MockResultCard));
    let resultCard = mockChildComponentEl.injector.get(MockResultCard) as MockResultCard;
    expect(resultCard.result).toBe(testResult);

  }));

});
