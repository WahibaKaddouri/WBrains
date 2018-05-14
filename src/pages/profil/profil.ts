import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

import { ProfilProvider } from '../../providers/profil/profil';
import { AuthentificationPage } from '../authentification/authentification';
import { ShareUserProvider } from '../../providers/share-user/share-user';

@IonicPage()
@Component(
{
  selector: 'profil',
  templateUrl: 'profil.html',
})

export class ProfilPage
{
  public user: any;
  authentification = AuthentificationPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public profilProvider: ProfilProvider, public alertCtrl: AlertController, public shareUserProvider: ShareUserProvider) 
  {

  }

  ionViewDidEnter()
  {
    this.profilProvider.getUserInfo(this.shareUserProvider.getUserName()).then(snapshot => 
    {
      this.user = snapshot;
    });
  }
  
  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad ProfilPage');
  }

  closeUserProfile()
  {
  	this.viewCtrl.dismiss();
  }

  changePassword()
  {
    let old_password: string;
    let changePasswordPrompt = this.alertCtrl.create(
    {
      title: "Mot de passe",
      inputs: 
      [
        {
          name: "oldPassword",
          type: "password",
          placeholder: "Ancien mot de passe",
        },
        {
          name: "newPassword",
          type: "password",
          placeholder: "Nouveau mot de passe",
        },
      ],
      buttons: 
      [
        {
          text: "Annuler",
          handler: data => 
          {
            console.log("Annuler");
          }
        },
        {
          text: "Confirmer",
          handler: data => 
          {
            console.log("Confirmer");
            console.log(data.oldPassword, this.shareUserProvider.getUserPassword());
            if (data.oldPassword == this.shareUserProvider.getUserPassword()) 
            {
              this.profilProvider.changePassword(data.newPassword, this.shareUserProvider.getUserName());
            }
            
          }
        }
      ]
    });

    changePasswordPrompt.present();
  }

}