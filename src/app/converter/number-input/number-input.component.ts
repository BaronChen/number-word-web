import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './reducers/number-input.reducer';
import { Observable } from 'rxjs/Observable';
import { UpdateNumber, ClearNumber } from './actions/number-input.actions';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {

  number$: Observable<string>;

  constructor(private store: Store<fromStore.State>) { 

  }

  ngOnInit() {
    this.number$ = this.store.select((state: fromStore.State) => state.number);
  }

  numberChange(value:string) {
    this.store.dispatch(new UpdateNumber(value));
  }

}
