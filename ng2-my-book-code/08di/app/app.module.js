"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var myservice_service_1 = require("./myservice.service");
var greeting_module_1 = require("./greeting/greeting.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, greeting_module_1.GreetingModule],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [myservice_service_1.MyService, { provide: 'myService2', useClass: myservice_service_1.MyService }, { provide: 'myService3', useExisting: myservice_service_1.MyService },
            //Param Provider
            { provide: myservice_service_1.MyParamService, useFactory: function () { return new myservice_service_1.MyParamService("YOLO!"); } },
            //Value Provider
            myservice_service_1.MyValueService,
            { provide: 'valueProvider', useValue: "Tread Lightly!" },
            //Super and SubService
            {
                provide: myservice_service_1.MySuperService,
                useFactory: function (user) {
                    if (user.isSuper()) {
                        return new myservice_service_1.MySuperService(user);
                    }
                    else {
                        return new myservice_service_1.MySubService();
                    }
                },
                deps: [myservice_service_1.User]
            },
            myservice_service_1.User,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map