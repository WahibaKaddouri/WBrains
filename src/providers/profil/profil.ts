import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

@Injectable()
export class ProfilProvider
{
  public user: any;
  index: number;

  constructor(public http: Http) 
  {

  }

  getUserInfo(username: string): firebase.Promise<any>
  {
    return new Promise((resolve, reject) => 
    {
    firebase.database().ref("/users")
    .child("/" + username)
    .on("value", data => 
    {
      resolve(data.val());
    });
    });
  }

  changePassword(newPassword: string, username: string): firebase.Promise<any> 
  {
    return firebase.database().ref("/users")
    .child(username).update(
    {
      password: newPassword,
    });
  }

  checkUser(username: string, password: string): boolean
  {
    let users = [];

    let i: number = 0;
    let temp: boolean = false;

    firebase.database().ref("/users").on('value', snapshot => 
    {
      snapshot.forEach(snap => 
      {
        users.push([snap.val().username, snap.val().password]);
        return false;
      });
    });

    while (i < users.length)
    {
      if ((users[i][0] == username) && (users[i][1]) == password)
      {
        return true;
      }
      else
      {
        i++;
      }
    }

    return temp;
  }
}
