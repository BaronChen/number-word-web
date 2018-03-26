import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromConvertButtons from './reducers/convert-buttons.reducer';

@Component({
  selector: 'app-convert-buttons',
  templateUrl: './convert-buttons.component.html',
  styleUrls: ['./convert-buttons.component.scss']
})
export class ConvertButtonsComponent implements OnInit {

  constructor(private store: Store<fromConvertButtons.State>) { }

  ngOnInit() {
  }

}
