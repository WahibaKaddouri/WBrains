import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ProfilPage } from '../profil/profil';

@IonicPage()
@Component({
  selector: 'page-reserver-vehicule',
  templateUrl: 'reserver-vehicule.html',
})

export class ReserverVehiculePage 
{

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController)  
  {

  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad ReserverVehiculePage');
  }

  openUserProfile()
  {
    let modal = this.modalCtrl.create(ProfilPage);
    modal.present();
  }

}
