import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInputComponent } from './number-input/number-input.component';
import { ConverterPageComponent } from './converter-page/converter-page.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromConverter from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects as converterEffects} from './effects';
import { NumberInputCardComponent } from './number-input/components/number-input-card/number-input-card.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TextInputCardComponent } from './text-input/components/text-input-card/text-input-card.component';
import { ConvertButtonsComponent } from './convert-buttons/convert-buttons.component';
import { ConverterButtonsGroupComponent } from './convert-buttons/components/converter-buttons-group/converter-buttons-group.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('converter', fromConverter.reducers),
    EffectsModule.forFeature(converterEffects),
  ],
  declarations: [NumberInputComponent, ConverterPageComponent, NumberInputCardComponent, TextInputComponent, TextInputCardComponent, ConvertButtonsComponent, ConverterButtonsGroupComponent],
  exports: [ConverterPageComponent]
})
export class ConverterModule { }


export const converterRoutes = [
  { path: 'converter', component: ConverterPageComponent }
]
