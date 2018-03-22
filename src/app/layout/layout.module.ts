import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { ConverterModule, converterRoutes } from '../converter/converter.module';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes = [
  ...converterRoutes,
  {
    path: '',
    redirectTo: '/converter',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ConverterModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [LayoutComponent, NotFoundComponent],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
