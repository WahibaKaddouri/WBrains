import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShareUserProvider 
{
	public username: string = "";
    public password: string = "";

	constructor(public http: Http) 
	{

	}

    setUserParameters(username, password) 
    {
        this.username = username;
        this.password = password;
    }
  
    getUserName() 
    {
        return this.username;
    }   

    getUserPassword()
    {
    	return this.password;
    }
}
