import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from './user.model';

//zz
import {CognitoUserPool, 
  CognitoUserAttribute, 
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession
} from 'amazon-cognito-identity-js';
const POOL_DATA = {
  UserPoolId: 'ap-southeast-2_TTsCwoDHS',
  ClientId: 'jacu8ib4qsi7tr7q3guc2p554'
};
const userPool = new CognitoUserPool(POOL_DATA);
//complete zz


@Injectable()
export class AuthService {
  authIsLoading = new BehaviorSubject<boolean>(false);
  authDidFail = new BehaviorSubject<boolean>(false);
  authStatusChanged = new Subject<boolean>();
  //zz
  registeredUser: CognitoUser; //zz end

  constructor(private router: Router) {}
  signUp(username: string, email: string, password: string): void {
    this.authIsLoading.next(true);
    const user: User = {
      username: username,
      email: email,
      password: password
    };
    //zz
    const attrList: CognitoUserAttribute[] = [];
    const emailAttribute = {
      Name: 'email',
      Value: user.email
    };
    attrList.push(new CognitoUserAttribute(emailAttribute));
    userPool.signUp(user.username, user.password, attrList, null, (err, result) =>{
      if(err){
        this.authDidFail.next(true);
        this.authIsLoading.next(false);
        return;
      }
      this.authDidFail.next(false);
      this.authIsLoading.next(false);
      this.registeredUser = result.user;
    });
    return;
  }
  confirmUser(username: string, code: string) {
    this.authIsLoading.next(true);
    const userData = {
      Username: username,
      //zz
      Pool: userPool
    };
    //zz
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(code,true,(err,result) =>{
      if(err){
        this.authDidFail.next(true);
        this.authIsLoading.next(false);
        return;
      }
      this.authDidFail.next(false);
      this.authIsLoading.next(false);
      this.router.navigate(['/']);
    })

  }
  signIn(username: string, password: string): void {
    this.authIsLoading.next(true);
    const authData = {
      Username: username,
      Password: password
    };
    //zz
    const authDetails = new AuthenticationDetails(authData);
    const userData = {
      Username: username,
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);
    const that = this;
    cognitoUser.authenticateUser(authDetails,{
        onSuccess (result: CognitoUserSession) {
            that.authStatusChanged.next(true);
            that.authDidFail.next(false);
            that.authIsLoading.next(false);
            console.log(result);
        },
        onFailure(err) {
            that.authDidFail.next(true);
            that.authIsLoading.next(false);
            console.log(err);
        }
    });

    this.authStatusChanged.next(true);
    return;
  }


  getAuthenticatedUser() {
    //zz
    return userPool.getCurrentUser();
  }


  logout() {
    //zz
    this.getAuthenticatedUser().signOut();
    this.authStatusChanged.next(false);
  }


  isAuthenticated(): Observable<boolean> {
    const user = this.getAuthenticatedUser();
    const obs = Observable.create((observer) => {
      if (!user) {
        observer.next(false);
      } else {
        user.getSession((err,session) =>{
          if(err){
            observer.next(false);
          }else {
            if(session.isValid()){
              observer.next(true);
            }else{
              observer.next(false);
            }
          }
        })
      }
      observer.complete();
    });
    return obs;
  }
  initAuth() {
    this.isAuthenticated().subscribe(
      (auth) => this.authStatusChanged.next(auth)
    );
  }
}
