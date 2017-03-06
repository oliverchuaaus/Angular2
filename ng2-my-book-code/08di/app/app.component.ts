import { Component, Inject, ReflectiveInjector } from '@angular/core';
import { MyService, MyParamService, MyValueService, MySuperService, SizeService } from './myservice.service';

@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular App</h1>
  <div>
  <button (click)="invoke1()">Click MyService!</button>
  <button (click)="invoke2()">Click MyService2!</button>
  <button (click)="invoke3()">Click MyService3!</button>
  </div>

  <div>
  <button (click)="invokeParam()">Click MyParamService!</button>
  <button (click)="invokeValue()">Click MyValueService!</button>
  </div>

  <div>
  <button (click)="invokeSuper()">Click MySuperService!</button>
  </div>

  <div>
  <button (click)="invokeSize()">Click SizeService!</button>
  </div>  

  <div>
  {{message}}
  <div>


  <div>
  <!--
  component cannot be referenced directly
  <salutation></salutation>
  -->
  <greeting></greeting>
  </div>
  `
})
export class AppComponent {
  message: string;
  constructor(private myService: MyService, private myService2: MyService, private myService3: MyService
    , private yoloParamService: MyParamService,
    private myValueService: MyValueService,
    private mySuperService: MySuperService,
  ) { }

  invoke1() {
    this.message = this.myService.invoke();
    setTimeout(() => { this.message = "" }, 3000);
  }

  invoke2() {
    this.message = this.myService2.invoke();
    this.message += " myService === myService2: " + (this.myService === this.myService2);
    setTimeout(() => { this.message = "" }, 3000);
  }

  invoke3() {
    this.message = this.myService3.invoke();
    this.message += " myService === myService3: " + (this.myService === this.myService3);
    setTimeout(() => { this.message = "" }, 3000);
  }

  invokeParam() {
    this.message = this.yoloParamService.invoke();
    setTimeout(() => { this.message = "" }, 3000);
  }

  invokeValue() {
    this.message = this.myValueService.invoke();
    setTimeout(() => { this.message = "" }, 3000);
  }

  invokeSuper() {
    this.message = this.mySuperService.invoke();
    setTimeout(() => { this.message = "" }, 3000);
  }

  invokeSize() {
    //this.message = this.sizeService.invoke();
    //manual injector to get correct service at runtime
    let injector: any = ReflectiveInjector.resolveAndCreate([
      SizeService,
      {
        provide: 'mySizeService',
        useFactory: (viewport: any) => {
          return viewport.getSizeService();
        },
        deps: [SizeService]
      }
    ]);
    let sizeService: any = injector.get('mySizeService');
    this.message = sizeService.invoke();    
    setTimeout(() => { this.message = "" }, 3000);
  }

}