import { MyService } from "./my-service";
import { MyClass } from "./my-class";

let myServiceFactory = (myClass: MyClass) => {
    return new MyService(myClass, myClass.male);
};

export let myServiceProvider =
    {
        provide: MyService,
        useFactory: myServiceFactory,
        deps: [MyClass]
    };