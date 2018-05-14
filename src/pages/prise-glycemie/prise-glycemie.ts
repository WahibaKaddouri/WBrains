import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { GlycemieValidator } from '../../validators/GlycemieValidator';
import { PrelevementProvider } from '../../providers/prelevement/prelevement';
import { ProfilProvider } from '../../providers/profil/profil';
import { ShareUserProvider } from '../../providers/share-user/share-user';

@IonicPage()
@Component({
  selector: 'page-prise-glycemie',
  templateUrl: 'prise-glycemie.html',
})

export class PriseGlycemiePage 
{

  autoMode : boolean;
  glycemieValue : number;
  insulineUnits: number;
  glycemie : AbstractControl;
  glycemieForm : FormGroup;
  notifType : string;
  currentUser: any;

  constructor(private navCtrl: NavController, private navParams: NavParams, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private formBuilder : FormBuilder, private prelevementProvider: PrelevementProvider, private profilProvider: ProfilProvider, private shareUserProvider: ShareUserProvider) 
  {
    this.glycemieForm = formBuilder.group({
      'glycemie': ['', Validators.compose([GlycemieValidator.isValid, Validators.required, Validators.minLength(1), Validators.maxLength(5)])]
    })
    this.glycemie = this.glycemieForm.controls['glycemie'];
  }

  ionViewDidEnter()
  {
    this.profilProvider.getUserInfo(this.shareUserProvider.getUserName()).then(snapshot => 
    {
      this.currentUser = snapshot;
    });
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad PriseGlycemiePage');
  }

  controlSendPrelevement()
  {
    if(this.glycemieForm.valid)
    {
      this.glycemieValue = this.glycemie.value;

      if(this.glycemieValue > 2 && this.glycemieValue < 2.52)
      {
        this.notifType = "Alerte";
        
        let warningGlycemiaValueAlert = this.alertCtrl.create({
          title: 'Alerte ! ',
          subTitle: 'Votre taux de glycémie est égèrement élevé : '+this.glycemieValue+'. Faites attention ! Une notification a été envoyée à votre médecin traitant !',
          buttons: 
          [
            {
              text : 'OK',
              handler: () => {
                this.glycemieForm.controls['glycemie'].setValue("");
              }
            }
          ]
        });
        warningGlycemiaValueAlert.present();
      }
      else if (this.glycemieValue >= 2.52) 
      {

        this.notifType = "Urgence";
        this.insulineUnits = 2 ;
        let dangerGlycemiaValueAlert = this.alertCtrl.create({
          title: 'Urgence ! ',
          subTitle: 'Votre taux de glycémie est anormal : '+this.glycemieValue+'. Vous ête en hyperglycémie. Veuillez prendre '+this.insulineUnits+'unité d\'insuline en urgence. Une alerte a été envoyée à votre médecin traitant !',
          buttons: 
          [
            {
              text : 'OK',
              handler: () => {
                this.glycemieForm.controls['glycemie'].setValue("");
              }
            }
          ]
        });
        dangerGlycemiaValueAlert.present();
      }
      else
      {
        this.notifType = "Notification";

        let normalGlycemiaValueAlert = this.alertCtrl.create({
          title: 'Notification ! ',
          subTitle: 'Votre taux de glycémie est normal : '+this.glycemieValue+'. Une notification a été envoyée à votre médecin traitant !',
          buttons: [
            {
              text : 'OK',
              handler: () => {
                this.glycemieForm.controls['glycemie'].setValue("");
              }
            }
          ]
        });
        normalGlycemiaValueAlert.present();
      }  
      //Envoyer une notification au médecin traitant 
      this.prelevementProvider.sendPrelevementNotification(this.notifType, this.glycemieValue, this.currentUser.name, this.currentUser.surname, this.currentUser.idMedicalFile);   
    }
  }

  insulineInjectUnits(glycemiaValue : number, rapidInsulineDose : number) : number
  {
    var diffValue, insulineUnits : number;
    diffValue = Math.floor(glycemiaValue - 2); // 2 est un taux normal pour un diabétique de type 1 
    insulineUnits = Math.floor(diffValue/rapidInsulineDose);
    return insulineUnits;
  }

  detectMaterialLoading() 
  {

    if(this.autoMode)
    {
        let loader = this.loadingCtrl.create({
        content: "Connexion au matériel en cours...",
        duration: 3000
      });

      loader.onDidDismiss(() => {

          this.autoMode = false;
          let connexionFailedMaterialAlert = this.alertCtrl.create({
            title: 'Echec connexion',
            subTitle: 'La connexion au matériel a échoué ! Veuillez rééssayer.',
            buttons: ['OK']
          });
          connexionFailedMaterialAlert.present();
      });

      loader.present();
    }
  }


}
