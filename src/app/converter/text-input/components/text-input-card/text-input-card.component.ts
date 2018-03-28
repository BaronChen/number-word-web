import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input-card',
  templateUrl: './text-input-card.component.html',
  styleUrls: ['./text-input-card.component.scss']
})
export class TextInputCardComponent implements OnInit {

  @Input()
  text: string;

  @Output()
  textChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onTextChange(value: string) {
    this.textChange.emit(value);
  }

}