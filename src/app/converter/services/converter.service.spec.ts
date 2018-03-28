import { TestBed, inject } from '@angular/core/testing';

import { ConverterService } from './converter.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConverterService]
    });
  });

  it('should be created', inject([ConverterService], (service: ConverterService) => {
    expect(service).toBeTruthy();
  }));
});
