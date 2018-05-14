import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

@Injectable()
export class PrelevementProvider {

  static index : number;

  constructor(public http: Http) 
  {
    PrelevementProvider.index = 0;
  }

  sendPrelevementNotification(newNotifType : string, newGlycemiaValue : number, newPatientFirstName : string, newPatientLastName: string, newIdMedicalFile: number): firebase.Promise<any> 
  {
    PrelevementProvider.index++;
    return firebase.database().ref('/prelevementNotifications')
    .child("notification_"+PrelevementProvider.index).set(
    {
      notifType : newNotifType,
      glycemiaValue : newGlycemiaValue,
      patientName : newPatientFirstName,
      patientSurname : newPatientLastName,
      idMedicalFile : newIdMedicalFile,
    });
  }

}
