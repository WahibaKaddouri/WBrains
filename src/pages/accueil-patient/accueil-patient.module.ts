import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccueilPatientPage } from './accueil-patient';

@NgModule({
  declarations: [
    AccueilPatientPage,
  ],
  imports: [
    IonicPageModule.forChild(AccueilPatientPage),
  ],
  exports: [
    AccueilPatientPage
  ]
})
export class AccueilPatientPageModule {}
