import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';

import { NotificationsPage } from '../notifications/notifications';
import { MesureIndicateursPage } from '../mesure-indicateurs/mesure-indicateurs';
import { SuiviPage } from '../suivi/suivi';
import { RdvPage } from '../rdv/rdv';
import { ReserverVehiculePage } from '../reserver-vehicule/reserver-vehicule';

@IonicPage()
@Component({
  selector: 'page-accueil-patient',
  templateUrl: 'accueil-patient.html',
})
export class AccueilPatientPage {
  
  @ViewChild('myTabs') tabRef: Tabs;

  notification = NotificationsPage;
  mesureIndicateurs = MesureIndicateursPage;
  suivi = SuiviPage;
  rdv = RdvPage;
  resVehicule = ReserverVehiculePage;

  pages: Array<{title: string, component: any, index: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
    this.pages = [
      { title: 'Notifications', component: this.notification, index: 0 },
      { title: 'Indicateurs', component:  this.mesureIndicateurs, index: 1 },
      { title: 'Mon état', component: this.suivi, index: 2 },
      { title: 'Rendez-vous', component: this.rdv, index: 3 },
      { title: 'Réserver un véhicule', component: this.resVehicule, index: 4 }
    ];
  }

  openPage(indexPage){
    this.tabRef.select(indexPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPatientPage');
  }

}
