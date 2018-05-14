import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ControlPrelevementPage } from './control-prelevement';

@NgModule({
  declarations: [
    ControlPrelevementPage,
  ],
  imports: [
    IonicPageModule.forChild(ControlPrelevementPage),
  ],
  exports: [
    ControlPrelevementPage
  ]
})
export class ControlPrelevementPageModule {}
