import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ProfilPage } from '../profil/profil';

@IonicPage()
@Component({
  selector: 'page-suivi',
  templateUrl: 'suivi.html',
})

export class SuiviPage 
{
	//profil;
	public Glycemie = "1.2Og/l";
    public Tensionarterielle = "13/8";
    public Casurgentsrecenses = "3";

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) 
	{
		//this.profil = ProfilPage;
	}

	ionViewDidLoad() 
	{
		console.log('ionViewDidLoad SuiviPage');
	}

	openUserProfile()
	{
		//this.navCtrl.push(this.profil);
		let modal = this.modalCtrl.create(ProfilPage);
		modal.present();
	}

}
