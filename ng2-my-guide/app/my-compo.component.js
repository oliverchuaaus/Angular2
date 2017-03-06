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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var my_service_1 = require("./my-service");
var my_class_1 = require("./my-class");
var my_config_1 = require("./my-config");
var core_2 = require("@angular/core");
var MyCompoComponent = (function () {
    function MyCompoComponent(myService, myConfig) {
        this.myService = myService;
        this.myConfig = myConfig;
    }
    MyCompoComponent.prototype.getString = function (msg) {
        if (this.myConfig) {
            return this.myService.method1(this.myConfig.name);
        }
        else { }
        return this.myService.method1(msg);
    };
    return MyCompoComponent;
}());
MyCompoComponent = __decorate([
    core_1.Component({
        selector: 'my-compo',
        template: "\n     <!-- \n        {{this.myService.method1('msg')}}\n     -->   \n     {{getString('test')}}\n  ",
        providers: [my_service_1.MyService, my_class_1.MyClass],
    }),
    __param(1, core_2.Inject(my_config_1.MY_TOKEN)),
    __metadata("design:paramtypes", [my_service_1.MyService, Object])
], MyCompoComponent);
exports.MyCompoComponent = MyCompoComponent;
//# sourceMappingURL=my-compo.component.js.map