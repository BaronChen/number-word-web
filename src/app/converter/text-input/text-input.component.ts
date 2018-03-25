import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './reducers/text-input.reducer';
import { Observable } from 'rxjs/Observable'
import { UpdateText } from './actions/text-input.actions';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  text$: Observable<string>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.text$ = this.store.select((state: fromStore.State) => state.text);
  }

  textChange(value: string) {
    this.store.dispatch(new UpdateText(value));
  }

}
