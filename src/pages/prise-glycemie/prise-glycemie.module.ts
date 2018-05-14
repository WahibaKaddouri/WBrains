import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PriseGlycemiePage } from './prise-glycemie';

@NgModule({
  declarations: [
    PriseGlycemiePage,
  ],
  imports: [
    IonicPageModule.forChild(PriseGlycemiePage),
  ],
  exports: [
    PriseGlycemiePage
  ]
})
export class PriseGlycemiePageModule {}
