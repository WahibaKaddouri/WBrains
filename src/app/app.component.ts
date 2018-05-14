import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { GuidePage } from '../pages/guide/guide';

@Component(
{
  templateUrl: 'app.html'
})

export class MyApp 
{
  @ViewChild(Nav) nav: Nav;
  rootPage:any = GuidePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) 
  {
    firebase.initializeApp(
    {
      apiKey: "AIzaSyAI6v02Yaj8YJePNb7itt3MfQ2ZBQmuewc",
      authDomain: "medicalcaredb.firebaseapp.com",
      databaseURL: "https://medicalcaredb.firebaseio.com",
      projectId: "medicalcaredb",
      storageBucket: "medicalcaredb.appspot.com",
      messagingSenderId: "556482756432"
    });

    platform.ready().then(() => 
    {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}