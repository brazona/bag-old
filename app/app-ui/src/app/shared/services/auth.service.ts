import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { plainToClass } from 'class-transformer';
import * as moment from "moment";


import { Auth } from '../interfaces/auth/auth';
import {Token } from '../interfaces/token/token'
import { GenericService } from './generic.service';
import { Oauth2 } from '../interfaces/oauth2/oauth2';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends GenericService{

  private authBase64: string = "";
  private isUserAuth: boolean = false;
  private body: Oauth2 = {
    grant_type:"",
    username:"",
    password:""
  };
  private iToken: Token = {
    access_token:"",
    expires_in:0
  };
  constructor(router: Router, private http: HttpClient) {
    super(router)
  }

  login(auth: Auth): Observable <any>{
    return new Observable((observer) => {
      this.builderBody(auth);
      this.builderHeader64();
      const bodyResquest = new HttpParams()
        .set('username', auth.login)
        .set('password', auth.password)
        .set('grant_type', "this.body.grant_type");
      this.http.post<Token>(
        this.env.APP_API.URL+'/authentication/oauth/token', 
        bodyResquest.toString(), 
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', `Basic ${this.authBase64}`),
          observe: 'response'
        }
      )
      .subscribe(
        res =>{
          this.router.navigate(['/home']);
          observer.next(true);
        },
        (err: string) =>{
          console.log(err);
          observer.next(true);
        }
      );
      
    }

  )}
  private setSession(token: Token) {
    const expiresAt = moment().add(token.expires_in,'second');
    localStorage.setItem('token', token.access_token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
  }
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

 public getExpiration() {
    return moment(localStorage.getItem("expires_at"));
  }
  public isAthentication(){
    return this.verifyTokenStorage();
  }
  private verifyTokenStorage():boolean{
    if(localStorage['token'] != null) {
      this.isUserAuth =  true;
    }
    return this.isUserAuth;
  }
  private builderBody(auth:Auth){
    this.body.grant_type = "this.env.APP_API.GRANT"
    this.body.username = auth.login;
    this.body.password = auth.password;
  }
  private builderHeader64(){
    this.authBase64 = window.btoa("this.env.APP_API.AUTH_USER" + ':' + "this.env.APP_API.AUTH_PASS");
  }
 
  
}

