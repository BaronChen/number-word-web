import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromConvertButtons from './reducers/convert-buttons.reducer';
import * as fromStore from '../reducers';
import { Convert, UpdateConversionType } from './actions/convert-buttons.actions';
import { ConversionType } from './models';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-convert-buttons',
  templateUrl: './convert-buttons.component.html',
  styleUrls: ['./convert-buttons.component.scss']
})
export class ConvertButtonsComponent implements OnInit {

  conversionType$:Observable<ConversionType>;

  constructor(private store: Store<fromConvertButtons.State>) { }

  ngOnInit() {
    this.conversionType$ = this.store.select(fromStore.getConversionType);
  }

  convertClick() {
    this.store.dispatch(new Convert());
  }

  updateConversionType(type:ConversionType) {
    this.store.dispatch(new UpdateConversionType(type));
  }
}
