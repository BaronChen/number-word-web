import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInputComponent } from './number-input/number-input.component';
import { ConverterPageComponent } from './converter-page/converter-page.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromConverter from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects as converterEffects} from './effects';
import { NumberInputFieldComponent } from './number-input/containers/number-input-field/number-input-field.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('converter', fromConverter.reducers),
    EffectsModule.forFeature(converterEffects)
  ],
  declarations: [NumberInputComponent, ConverterPageComponent, NumberInputFieldComponent],
  exports: [ConverterPageComponent]
})
export class ConverterModule { }


export const converterRoutes = [
  { path: 'converter', component: ConverterPageComponent }
]
