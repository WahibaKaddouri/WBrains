import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReserverVehiculePage } from './reserver-vehicule';

@NgModule({
  declarations: [
    ReserverVehiculePage,
  ],
  imports: [
    IonicPageModule.forChild(ReserverVehiculePage),
  ],
  exports: [
    ReserverVehiculePage
  ]
})

export class ReserverVehiculePageModule {}
