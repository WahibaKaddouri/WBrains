import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import firebase from 'firebase';

import { AccueilPatientPage } from '../accueil-patient/accueil-patient';
import { UsernameValidator } from  '../../validators/username';
import { ProfilProvider } from '../../providers/profil/profil';
import { ShareUserProvider } from '../../providers/share-user/share-user';

@Component(
{
  selector: 'page-authentification',
  templateUrl: 'authentification.html'
})

export class AuthentificationPage 
{
  accueilPatient = AccueilPatientPage;
  authenticateForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(public navCtrl: NavController, public menu: MenuController, public formBuilder: FormBuilder, public profilProvider: ProfilProvider, public shareUserProvider: ShareUserProvider) 
  {
  	this.menu.swipeEnable(false);

    this.authenticateForm = formBuilder.group(
    {
      username: ["", Validators.compose([Validators.maxLength(15), Validators.minLength(3), Validators.pattern("[a-zA-Z0-9][A-Za-z0-9_-]*"), Validators.required])],
      password: ["", Validators.compose([Validators.minLength(8), Validators.required])]
    });

    this.username = this.authenticateForm.controls["username"];
    this.password = this.authenticateForm.controls["password"];
  }

  openAccueilPatientPage() 
  {
    this.shareUserProvider.setUserParameters(this.username.value, this.password.value);
  	this.navCtrl.push(this.accueilPatient);
  }

  check(): boolean
  {
    this.shareUserProvider.setUserParameters(this.username.value, this.password.value);
    return this.profilProvider.checkUser(this.username.value, this.password.value);
  }
}