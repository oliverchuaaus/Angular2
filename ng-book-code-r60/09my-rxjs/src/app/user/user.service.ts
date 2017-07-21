import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from '../user/user.model';

@Injectable()
export class UserService {
    currentUser: Subject<User> = new BehaviorSubject<User>(null);

    public setCurrentUser(newUser: User): void {
        console.log('new user: ' + newUser.name);
        this.currentUser.next(newUser);
    }
}