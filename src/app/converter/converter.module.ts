import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInputComponent } from './number-input/number-input.component';
import { ConverterPageComponent } from './converter-page/converter-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [NumberInputComponent, ConverterPageComponent],
  exports: [ConverterPageComponent]
})
export class ConverterModule { }

export const converterRoutes = [
  { path: 'converter', component: ConverterPageComponent }
]
