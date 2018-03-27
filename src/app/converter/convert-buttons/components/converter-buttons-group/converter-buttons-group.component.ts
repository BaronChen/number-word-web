import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-converter-buttons-group',
  templateUrl: './converter-buttons-group.component.html',
  styleUrls: ['./converter-buttons-group.component.scss']
})
export class ConverterButtonsGroupComponent implements OnInit {

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

}
