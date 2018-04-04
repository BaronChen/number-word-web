import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-converter-buttons-group',
  templateUrl: './converter-buttons-group.component.html',
  styleUrls: ['./converter-buttons-group.component.scss']
})
export class ConverterButtonsGroupComponent implements OnInit {

  @Output()
  numberToTextClick = new EventEmitter();

  @Output()
  textToNumberClick = new EventEmitter();

  isMobile: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      }
    });
  }

  onNumberToTextClick() {
    this.numberToTextClick.emit();
  }

  onTextToNumberClick() {
    this.textToNumberClick.emit();
  }

}
