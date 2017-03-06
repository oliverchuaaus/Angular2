import {Injectable} from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthService {
    login(username: string, password: string): boolean {
        if (username == "username" && password == "password") {
            localStorage.setItem('username', username);
            return true;
        }
        return false;
    }

    logout(){
        localStorage.removeItem('username');
    }


    getUsername():string{
        return localStorage.getItem('username');
    }

    isLoggedIn():boolean{
        return localStorage.getItem('username')!=null;
    }
}

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private authService: AuthService) 
    { }
    canActivate(): boolean {
        return this.authService.isLoggedIn();
    }
}