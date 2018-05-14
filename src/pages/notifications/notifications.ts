import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

import { ProfilPage } from '../profil/profil';

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})

export class NotificationsPage 
{

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public alertCtrl: AlertController) 
  {
    
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad NotificationsPage');
  }

  openUserProfile()
  {
    let modal = this.modalCtrl.create(ProfilPage);
    modal.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Notification 1',
      subTitle: 'Vous avez un RDV à 14h30 demain chez votre médecin traitant',
      buttons: ['OK']
    });
    alert.present();
  }

}
