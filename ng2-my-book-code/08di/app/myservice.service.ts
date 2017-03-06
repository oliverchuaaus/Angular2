import { Inject } from '@angular/core';

export class MyService {
    invoke(): string {
        let message: string = "MyService.invoke() invoked!";
        console.log(message);
        return message;
    }
}

export class MyParamService {
    constructor(private paramProvider: string) { }

    invoke(): string {
        let message: string = "MyParamService.invoke() invoked! paramProvider: " + this.paramProvider;
        console.log(message);
        return message;
    }
}

export class MyValueService {
    constructor( @Inject('valueProvider') private valueProvider: string) { }

    invoke(): string {
        let message: string = "MyValueService.invoke() invoked! valueProvider: " + this.valueProvider;
        console.log(message);
        return message;
    }
}

export class MySuperService {
    constructor(private user: User) { }
    invoke(): string {
        let message: string = "MySuperService.invoke() invoked! user: " + this.user.isSuper();
        console.log(message);
        return message;

    }
}

export class MySubService extends MySuperService {
    constructor() { super(null); }

    invoke(): string {
        let message: string = "MySubService.invoke() invoked! user: " + null;
        console.log(message);
        return message;
    }
}

export class User {
    isSuper(): boolean { return true; }
}


export class LargeService {
    invoke(): string {
        let message: string = "LargeService.invoke() invoked!";
        console.log(message);
        return message;
    }
}

export class SmallService {
    invoke(): string {
        let message: string = "SmallService.invoke() invoked!";
        console.log(message);
        return message;
    }
}

export class SizeService {
    getSizeService() {
        let size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (size < 800) {
            return new SmallService();
        }
        return new LargeService();
    }
}