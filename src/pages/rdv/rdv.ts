import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ProfilPage } from '../profil/profil';

@IonicPage()
@Component({
  selector: 'page-rdv',
  templateUrl: 'rdv.html',
})

export class RdvPage 
{

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) 
  {
    
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad RdvPage');
  }

  openUserProfile()
  {
    let modal = this.modalCtrl.create(ProfilPage);
    modal.present();
  }

}
