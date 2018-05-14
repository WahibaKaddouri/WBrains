import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RdvPage } from './rdv';

@NgModule({
  declarations: [
    RdvPage,
  ],
  imports: [
    IonicPageModule.forChild(RdvPage),
  ],
  exports: [
    RdvPage
  ]
})

export class RdvPageModule {}
