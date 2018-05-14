import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { AuthentificationPage } from '../pages/authentification/authentification';
import { AccueilPatientPage } from '../pages/accueil-patient/accueil-patient';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MesureIndicateursPage } from '../pages/mesure-indicateurs/mesure-indicateurs';
import { SuiviPage } from '../pages/suivi/suivi';
import { RdvPage } from '../pages/rdv/rdv';
import { ReserverVehiculePage } from '../pages/reserver-vehicule/reserver-vehicule';
import { PriseGlycemiePage } from '../pages/prise-glycemie/prise-glycemie';
import { GuidePage } from '../pages/guide/guide';
import { ProfilPage } from '../pages/profil/profil';
import { ProfilProvider } from '../providers/profil/profil';
import { ShareUserProvider } from '../providers/share-user/share-user';
import { PrelevementProvider } from '../providers/prelevement/prelevement';

@NgModule(
{
  declarations: 
  [
    MyApp,
    AuthentificationPage,
    AccueilPatientPage,
    NotificationsPage,
    MesureIndicateursPage,
    SuiviPage,
    RdvPage,
    ReserverVehiculePage,
    PriseGlycemiePage,
    GuidePage,
    ProfilPage
  ],
  imports: 
  [
    BrowserModule, 
    HttpModule,
    IonicModule.forRoot(MyApp,
    {
      backButtonText: '',
      tabsPlacement: 'bottom',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: 
  [
    MyApp,
    AuthentificationPage,
    AccueilPatientPage,
    NotificationsPage,
    MesureIndicateursPage,
    SuiviPage,
    RdvPage,
    ReserverVehiculePage,
    PriseGlycemiePage,
    GuidePage,
    ProfilPage
  ],
  providers: 
  [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfilProvider,
    ShareUserProvider,
    PrelevementProvider,
  ]
})

export class AppModule {}