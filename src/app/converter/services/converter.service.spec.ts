import { TestBed, inject, async } from '@angular/core/testing';
import { ConverterService } from './converter.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Word, MyNumber } from '../models';

describe('ConverterService', () => {
  let converterService: ConverterService;
  let httpMock: HttpTestingController;
  const testBaseUrl = 'test.com/'
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConverterService]
    });

    converterService = TestBed.get(ConverterService);
    converterService.apiUrl = testBaseUrl;
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', async(() => {
    expect(converterService).toBeTruthy();
  }));

  it('should handle error request correctly', async(() => {
    const testUrlPath = 'url/path';
    const testData: MyNumber = {
      number: '12345'
    };
    const testError = {
      errors: [
        'test error'
      ]
    };

    converterService.makeRequest(`${testBaseUrl}${testUrlPath}`, testData).subscribe(() => {
      fail('Should not get success result');
    }, (err => {
      expect(err).toEqual(testError.errors[0]);
    }));
    const req = httpMock.expectOne(`${testBaseUrl}${testUrlPath}`);

    expect(req.request.method).toBe("POST");
    req.flush(testError, { status: 404, statusText: 'Bad Request' });

  }));

  it('should handle 200 request correctly', async(() => {
    const testUrlPath = 'url/path';
    const testData: MyNumber = {
      number: '12345'
    };
    const testResult = {
      data: {
        text: 'twelve thousand and three hundred and forty five'
      }
    };

    converterService.makeRequest(`${testBaseUrl}${testUrlPath}`, testData).subscribe((result: Word) => {
      expect(result).toEqual(testResult.data);
    });
    const req = httpMock.expectOne(`${testBaseUrl}${testUrlPath}`);

    expect(req.request.method).toBe("POST");
    req.flush(testResult);

  }));

  it('should handle number to text request correctly', async(() => {
    spyOn(converterService, 'makeRequest').and.callFake(()=>{});
    const testInput: MyNumber = {
      number: '12343'
    }
    converterService.convertNumberToText(testInput);
    expect(converterService.makeRequest).toHaveBeenCalledWith(`${testBaseUrl}/number-to-word`, testInput);

  }));

  it('should handle text to number request correctly', async(() => {
    spyOn(converterService, 'makeRequest').and.callFake(()=>{});
    const testInput: Word = {
      text: 'eleven'
    }
    converterService.convertTextToNumber(testInput);
    expect(converterService.makeRequest).toHaveBeenCalledWith(`${testBaseUrl}/word-to-number`, testInput);

  }));

});
