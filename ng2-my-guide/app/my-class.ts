import {Injectable} from '@angular/core';

@Injectable()
export class MyClass{
    name: string;
    male: boolean;
    age: number;
    hobbies: string[];

    firstHobby(){
        return this.hobbies[0];
    }
}

export class MyAlpha extends MyClass{
    constructor(){
        super();
        this.name='Alpha';
    }
}