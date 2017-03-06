import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyService, MyParamService, MyValueService, MySuperService, MySubService, User, SizeService } from './myservice.service';
import { GreetingModule} from './greeting/greeting.module';
@NgModule({
  imports: [BrowserModule, GreetingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [MyService, { provide: 'myService2', useClass: MyService }, { provide: 'myService3', useExisting: MyService },
    //Param Provider
    { provide: MyParamService, useFactory: (): MyParamService => new MyParamService("YOLO!") },
    //Value Provider
    MyValueService,
    { provide: 'valueProvider', useValue: "Tread Lightly!" },
    //Super and SubService
    {
      provide: MySuperService,
      useFactory: (user) => {
        if (user.isSuper()) {
          return new MySuperService(user);
        }
        else {
          return new MySubService();
        }
      },
      deps: [User]
    },
    User,
    //SizeService, won't work dynamically
    /*
    SizeService, 
    { provide: 'SizeService', 
      useFactory: (ss: SizeService) => {return ss.getSizeService();},
      deps: [SizeService]
    },
    */
    
  ],
})
export class AppModule { }