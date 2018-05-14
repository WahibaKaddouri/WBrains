import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { AuthentificationPage } from '../authentification/authentification';

export interface Slide 
{
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-guide',
  templateUrl: 'guide.html'
})

export class GuidePage 
{

  constructor(public navCtrl: NavController, public menu: MenuController) 
  {
    this.menu.swipeEnable(false);
  }

  openAuthentificationPage() 
  {
    this.navCtrl.setRoot(AuthentificationPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
