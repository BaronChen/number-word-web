import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Word, MyNumber, Error } from '../models';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { StandardResponse } from '../../shared/models';


@Injectable()
export class ConverterService {

  apiUrl: string = environment.apiUrl + '/number-word'; 

  constructor(private http: HttpClient) { }

  convertNumberToText(data: MyNumber):Observable<Word> {
    return this.http.post(this.apiUrl + '/number-to-word', data).retry(2)
              .catch((err:any) => {
                //TODO: more robust error handling
                if (err.error instanceof Error) {
                  return Observable.throw(err.error.message);
                }else{
                  return Observable.throw(err.error.errors[0]);
                }
              })
              .map((result: StandardResponse<Word>): Word => {
                return result.data;
              });
  }

}
