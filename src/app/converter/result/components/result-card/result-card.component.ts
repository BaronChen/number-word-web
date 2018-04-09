import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ResultCardComponent implements OnInit {

  @Input()
  result: string;
  
  constructor() { }

  ngOnInit() {
  
  }

}
