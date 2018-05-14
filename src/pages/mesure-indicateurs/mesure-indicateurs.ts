import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ProfilPage } from '../profil/profil';
import { PriseGlycemiePage } from '../prise-glycemie/prise-glycemie';

@IonicPage()
@Component({
  selector: 'page-mesure-indicateurs',
  templateUrl: 'mesure-indicateurs.html',
})

export class MesureIndicateursPage 
{

  priseGlycemie = PriseGlycemiePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) 
  {

  }

  openPriseGlycemiePage()
  {
  	this.navCtrl.push(this.priseGlycemie);
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad MesureIndicateursPage');
  }

  openUserProfile()
  {
    let modal = this.modalCtrl.create(ProfilPage);
    modal.present();
  }

}
