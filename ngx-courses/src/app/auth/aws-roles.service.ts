import { Injectable, Inject, ViewChild } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { AuthService } from '../auth/auth.service';
import { awsURL } from '../constants';
import { Role, UserRole } from './user.model';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class AwsRolesService {
    private url: string = awsURL + "usermanagement/";
    private headers = new Headers({ 'Content-Type': 'application/json' });
    dataEdited = new BehaviorSubject<boolean>(false);
    dataIsLoading = new BehaviorSubject<boolean>(false);
    dataLoaded = new Subject<Role[]>();
    dataLoadFailed = new Subject<boolean>();
    subscription: Subscription;
    roleList: Role[];

    constructor(private http: Http, private router: Router, private authService: AuthService) { 
        this.subscribe();
    }

    subscribe() {
        console.log('aws-role subscribing');

        this.subscription = this.dataLoaded.subscribe(data => {
            console.log("aws-role data : " + data);
            this.roleList = data;
            if (data && this.roleList.length == 0) {
                console.log("calling add role");
                this.addRole();
            }

        });
    }


    hasRole(rolename: string): boolean {
        if (this.roleList) {
            return this.roleList.some(role => role.rolename == rolename);
        }
        return false;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    public getRoleList() {
        let username = this.authService.getUsername();
        this.authService.getAuthenticatedUser().getSession((err, session) => {
            this.http.get(this.url + "rolemanagement/" + username, {
                headers: new Headers({ 'Authorization': session.getIdToken().getJwtToken() })
            })
                .subscribe(
                (result) => {
                    this.dataLoadFailed.next(false);
                    this.dataIsLoading.next(false);
                    this.dataEdited.next(true);
                    console.log('get RoleList: ' + result.json());
                    this.dataLoaded.next(result.json());
                },
                (error) => {
                    this.dataIsLoading.next(false);
                    this.dataLoadFailed.next(true);
                    this.dataEdited.next(false);
                }
                );
        });
    }


    public addRole() {
        let username = this.authService.getUsername();
        this.authService.getAuthenticatedUser().getSession((err, session) => {
            this.http.post(this.url + "createrole", { "username": username, "rolename": "student" }, {
                headers: new Headers({ 'Authorization': session.getIdToken().getJwtToken() })
            })
                .subscribe(
                (result) => {
                    this.dataLoadFailed.next(false);
                    this.dataIsLoading.next(false);
                    this.dataEdited.next(true);
                    console.log('Added role');
                    this.dataLoaded.next([{ "rolename": "student" }]);
                },
                (error) => {
                    this.dataIsLoading.next(false);
                    this.dataLoadFailed.next(true);
                    this.dataEdited.next(false);
                }
                );
        });

    }


}