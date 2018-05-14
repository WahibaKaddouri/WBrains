import { FormControl } from '@angular/forms';
 
export class UsernameValidator 
{

  public user:any;
  

  /*static checkUsername(control: FormControl): any 
  {

     this.user.username="user_1";
 
    return new Promise(resolve => {
 
      //Fake a slow response from server
 
      setTimeout(() => {
        if(control.value !== this.user.username)
        {
          resolve(null);
        } 
        else 
        {
          resolve(
          {
            "username taken": true
          });
          //resolve(null);
        }
      }, 20);
 
    });
  }*/
}
 