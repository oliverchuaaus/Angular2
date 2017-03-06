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
var core_2 = require("@angular/core");
var my_class_1 = require("./my-class");
var MyService = (function () {
    function MyService(myClass, isAuthorised) {
        this.myClass = myClass;
        this.isAuthorised = isAuthorised;
    }
    MyService.prototype.method1 = function (msg) {
        return "In method 1: " + msg + " " + this.myClass.name + " " + this.isAuthorised;
    };
    return MyService;
}());
MyService = __decorate([
    core_1.Injectable(),
    __param(1, core_2.Optional()),
    __metadata("design:paramtypes", [my_class_1.MyClass, Boolean])
], MyService);
exports.MyService = MyService;
//# sourceMappingURL=my-service.js.map