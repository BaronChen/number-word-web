import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-number-input-card',
  templateUrl: './number-input-card.component.html',
  styleUrls: ['./number-input-card.component.scss']
})
export class NumberInputCardComponent implements OnInit {

  @Input()
  number: string;

  @Output() 
  numberChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 

  }

  ngOnInit() {
  }

  onNumberChange(value: string) {
    this.numberChange.emit(value);
  }

}
