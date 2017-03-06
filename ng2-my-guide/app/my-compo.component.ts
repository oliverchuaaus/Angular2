import { Component } from '@angular/core';
import { MyService }   from './my-service';
import { MyClass, MyAlpha } from './my-class';
import { MY_TOKEN, MyConfig }   from './my-config';
import {Inject} from '@angular/core';

@Component({
  selector: 'my-compo',
  template:`
     <!-- 
        {{this.myService.method1('msg')}}
     -->   
     {{getString('test')}}
  `, 
  providers: [MyService, MyClass],
})

export class MyCompoComponent{
    constructor(private myService: MyService, @Inject(MY_TOKEN) private myConfig: MyConfig){}

    getString(msg:string){
        if (this.myConfig){
            return this.myService.method1(this.myConfig.name);    
        }
        else{}
            return this.myService.method1(msg);
        }
    }
}