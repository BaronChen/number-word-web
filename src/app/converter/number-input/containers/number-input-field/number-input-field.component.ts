import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducers/number-input.reducer';
import { Observable } from 'rxjs/Observable';
import { UpdateNumber, ClearNumber } from '../../actions/number-input.actions';

@Component({
  selector: 'app-number-input-field',
  templateUrl: './number-input-field.component.html',
  styleUrls: ['./number-input-field.component.scss']
})
export class NumberInputFieldComponent implements OnInit {

  number$: Observable<string>;

  constructor(private store: Store<fromStore.State>) { 

  }

  ngOnInit() {
    this.number$ = this.store.select((state: fromStore.State) => state.number);
  }

  onNumberChange(event) {
    this.store.dispatch(new UpdateNumber(event.target.value));
  }

}
