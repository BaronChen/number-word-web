import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertButtonsComponent } from './convert-buttons.component';
import { Store, StoreModule } from '@ngrx/store';
import { NO_ERRORS_SCHEMA} from '@angular/core'

describe('ConvertButtonsComponent', () => {
  let component: ConvertButtonsComponent;
  let fixture: ComponentFixture<ConvertButtonsComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ConvertButtonsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertButtonsComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
