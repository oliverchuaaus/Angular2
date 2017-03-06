"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var myservice_service_1 = require("./myservice.service");
var AppComponent = (function () {
    function AppComponent(myService, myService2, myService3, yoloParamService, myValueService, mySuperService) {
        this.myService = myService;
        this.myService2 = myService2;
        this.myService3 = myService3;
        this.yoloParamService = yoloParamService;
        this.myValueService = myValueService;
        this.mySuperService = mySuperService;
    }
    AppComponent.prototype.invoke1 = function () {
        var _this = this;
        this.message = this.myService.invoke();
        setTimeout(function () { _this.message = ""; }, 3000);
    };
    AppComponent.prototype.invoke2 = function () {
        var _this = this;
        this.message = this.myService2.invoke();
        this.message += " myService === myService2: " + (this.myService === this.myService2);
        setTimeout(function () { _this.message = ""; }, 3000);
    };
    AppComponent.prototype.invoke3 = function () {
        var _this = this;
        this.message = this.myService3.invoke();
        this.message += " myService === myService3: " + (this.myService === this.myService3);
        setTimeout(function () { _this.message = ""; }, 3000);
    };
    AppComponent.prototype.invokeParam = function () {
        var _this = this;
        this.message = this.yoloParamService.invoke();
        setTimeout(function () { _this.message = ""; }, 3000);
    };
    AppComponent.prototype.invokeValue = function () {
        var _this = this;
        this.message = this.myValueService.invoke();
        setTimeout(function () { _this.message = ""; }, 3000);
    };
    AppComponent.prototype.invokeSuper = function () {
        var _this = this;
        this.message = this.mySuperService.invoke();
        setTimeout(function () { _this.message = ""; }, 3000);
    };
    AppComponent.prototype.invokeSize = function () {
        var _this = this;
        //this.message = this.sizeService.invoke();
        //manual injector to get correct service at runtime
        var injector = core_1.ReflectiveInjector.resolveAndCreate([
            myservice_service_1.SizeService,
            {
                provide: 'mySizeService',
                useFactory: function (viewport) {
                    return viewport.getSizeService();
                },
                deps: [myservice_service_1.SizeService]
            }
        ]);
        var sizeService = injector.get('mySizeService');
        this.message = sizeService.invoke();
        setTimeout(function () { _this.message = ""; }, 3000);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>My First Angular App</h1>\n  <div>\n  <button (click)=\"invoke1()\">Click MyService!</button>\n  <button (click)=\"invoke2()\">Click MyService2!</button>\n  <button (click)=\"invoke3()\">Click MyService3!</button>\n  </div>\n\n  <div>\n  <button (click)=\"invokeParam()\">Click MyParamService!</button>\n  <button (click)=\"invokeValue()\">Click MyValueService!</button>\n  </div>\n\n  <div>\n  <button (click)=\"invokeSuper()\">Click MySuperService!</button>\n  </div>\n\n  <div>\n  <button (click)=\"invokeSize()\">Click SizeService!</button>\n  </div>  \n\n  <div>\n  {{message}}\n  <div>\n\n\n  <div>\n  <!--\n  component cannot be referenced directly\n  <salutation></salutation>\n  -->\n  <greeting></greeting>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [myservice_service_1.MyService, myservice_service_1.MyService, myservice_service_1.MyService,
        myservice_service_1.MyParamService,
        myservice_service_1.MyValueService,
        myservice_service_1.MySuperService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map