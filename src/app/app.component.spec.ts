import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

describe('AppComponent', () => {

  let mockIconRegistry: any;
  let mockDomSanitizer: any;
  let testInput = 'testInput';

  beforeEach(async(() => {

    mockIconRegistry = jasmine.createSpyObj('MatIconRegistry', ['addSvgIcon']);
    mockDomSanitizer = {
      bypassSecurityTrustResourceUrl: () => {
        return testInput;
      }
    }
    spyOn(mockDomSanitizer, 'bypassSecurityTrustResourceUrl').and.callThrough();
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: MatIconRegistry, useFactory: () => mockIconRegistry },
        {provide: DomSanitizer, useFactory: () => mockDomSanitizer }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();

    expect(mockDomSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith('assets/github.svg');
    expect(mockIconRegistry.addSvgIcon).toHaveBeenCalledWith('github', testInput);

  }));

});
