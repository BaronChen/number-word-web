import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
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

  constructor() { }

  ngOnInit() {

  }

  onConvertClick() {
    this.convertClick.emit();
  }

  onUpdateConversionType(type: ConversionType) {
    this.updateConversionType.emit(type);
  }

}
