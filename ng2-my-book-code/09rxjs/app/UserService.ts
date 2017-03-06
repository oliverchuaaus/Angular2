import {Subject, BehaviorSubject} from 'rxjs';
import {User} from './models';


export class UserService{
    currentUser : Subject<User> = new BehaviorSubject<User>(null);

    setCurrentUser(newUser:User){
        this.currentUser.next(newUser);
    }
}