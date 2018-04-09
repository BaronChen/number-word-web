import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ConversionType } from '../../models';

@Component({
  selector: 'app-converter-buttons-group',
  templateUrl: './converter-buttons-group.component.html',
  styleUrls: ['./converter-buttons-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConverterButtonsGroupComponent implements OnInit {

  @Input()
  conversionType: ConversionType;

  convertionTypeArray:{ value: ConversionType, name: string }[] = [
    {value: ConversionType.numberToText, name: 'Numeric To Text'},
    {value: ConversionType.textToNumber, name: 'Text To Numeric'},
  ];

  @Output()
  convertClick = new EventEmitter();

  @Output()
  updateConversionType = new EventEmitter<ConversionType>();

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

  onConvertClick() {
    this.convertClick.emit();
  }

  onUpdateConversionType(type: ConversionType) {
    this.updateConversionType.emit(type);
  }

}
