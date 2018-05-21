import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { UserLogin } from '../../Models/UserLogin';
import { UserRegistration } from '../../Models/UserRegistration';
import 'rxjs/add/operator/map';
import { inject } from '@angular/core/src/render3';
import { URLTOKEN } from '../../app/app.urltoken';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  authApi:string="api/Accounts"
  endPoint:string ;
  constructor(
   @Inject(URLTOKEN)apiUrl:string,
   public http: HttpClient) {
   this.endPoint=apiUrl+this.authApi
  }


  login(user:UserLogin){
   return this.http.post(this.endPoint+"/login",user).map(resp=>resp)

  }


  logout(){

  }

  register(user:UserRegistration){
    return this.http.post(this.endPoint+"/register",user).map(resp=>resp);

  }

  delete(){

  }

  update(){

  }

}
