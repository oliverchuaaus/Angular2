import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class ExpressionService {
    loggedIn: boolean = false;

    toggle() {
        var e = new Date().getTime() + (2 * 1000);
        while (new Date().getTime() <= e) { }
        this.loggedIn = !this.loggedIn;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}