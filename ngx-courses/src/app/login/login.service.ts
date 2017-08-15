import { Injectable, ViewChild } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { URL } from '../constants';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    private url: string = URL;
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http, private router: Router) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    public login(username: string, password: string): Observable<UserDetails> {
        let credentials = new Credentials(username, password);
        return this.http.post(this.url + "login", credentials).map((res: any) => res.json());
    }
    public loginDummy(username: string, passowrd: string): Observable<UserDetails> {
        //dummy from file
        return this.http.get("../assets/json/login.json")
            .map((res: any) => res.json());
    }

    public register(username: string, emailAddress:string, password: string): Observable<Registration> {
        let registration = new Registration(username, emailAddress, password);
        return this.http.post(this.url + "register", registration).map((res: any) => res.json());
    }    

    loginUserDetails(userDetails: UserDetails) {
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        localStorage.setItem('lastAccessed', JSON.stringify(new Date().getTime()));
    }

    logout() {
        localStorage.removeItem('userDetails');
        localStorage.removeItem('lastAccessed');
    }

    getUserDetails(): UserDetails {
        if (localStorage.getItem('userDetails') == null) {
            return null;
        }
        let userDetails: UserDetails = JSON.parse(localStorage.getItem('userDetails'));
        return userDetails;
    }

    getUsername(): string {
        let userDetails = this.getUserDetails();
        return userDetails == null ? null : userDetails.username;

    }

    getSessionId(): string {
        let userDetails = this.getUserDetails();
        return userDetails == null ? null : userDetails.sessionId;
    }

    hasPermission(path: string) {
        let userDetails = this.getUserDetails();
        if (path == "/admin") {
            return this.hasRole('admin');
        }
        else if (path == "/student") {
            return this.hasRole('student');
        }
        else if (path == "/student-registration") {
            return this.hasRole('student');
        }
        else if (path == "/teacher") {
            return this.hasRole('teacher');
        }
        return false;
    }

    hasRole(role: string) {
        let userDetails = this.getUserDetails();
        if (userDetails != null) {
            return userDetails.roles.includes(role);
        }
        return false;
    }

    isLoggedIn(): boolean {
        return this.getUsername() != null;
    }

    checkSessionExpiry() {
        //logged in but expired
        let currentDate = new Date();
        let lastAccessed = JSON.parse(localStorage.getItem('lastAccessed'));
        let expiryDate = new Date(lastAccessed + (60 * 60 * 1000));
        if (currentDate < expiryDate) {
            currentDate.setTime(currentDate.getTime());
            localStorage.setItem('lastAccessed', JSON.stringify(currentDate.getTime()));
        } else {
            localStorage.removeItem('userDetails');
            localStorage.removeItem('lastAccessed');
            this.router.navigate(["home", { fromError: "sessionExpired" }]);
        }
    }

}

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private authService: LoginService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        let loggedIn = this.authService.isLoggedIn();
        if (!loggedIn) {
            this.router.navigate(["/login"]);
        }
        //logged in but expired
        this.authService.checkSessionExpiry();

        return this.authService.isLoggedIn() && this.authService.hasPermission(state.url);
    }
}

export class UserDetails {
    username: string;
    roles: string[];
    sessionId: string;
}

export class Credentials {
    constructor(private username: string, private password: string) { }
}

export class Registration {
    constructor(private username: string, private emailAddress: string, private password: string) { }
}