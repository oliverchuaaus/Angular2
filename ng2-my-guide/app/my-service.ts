import {Injectable} from '@angular/core';
import { Optional } from '@angular/core';

import { MyClass } from './my-class';

@Injectable()
export class MyService {

    constructor(private myClass: MyClass, @Optional() private isAuthorised: boolean) { }

    method1(msg: string): string {
        return "In method 1: " + msg + " " + this.myClass.name + " "+this.isAuthorised;
    }
}