import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesureIndicateursPage } from './mesure-indicateurs';

@NgModule({
  declarations: [
    MesureIndicateursPage,
  ],
  imports: [
    IonicPageModule.forChild(MesureIndicateursPage),
  ],
  exports: [
    MesureIndicateursPage
  ]
})

export class MesureIndicateursPageModule {}
