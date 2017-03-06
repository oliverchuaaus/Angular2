"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MyService = (function () {
    function MyService() {
    }
    MyService.prototype.invoke = function () {
        var message = "MyService.invoke() invoked!";
        console.log(message);
        return message;
    };
    return MyService;
}());
exports.MyService = MyService;
var MyParamService = (function () {
    function MyParamService(paramProvider) {
        this.paramProvider = paramProvider;
    }
    MyParamService.prototype.invoke = function () {
        var message = "MyParamService.invoke() invoked! paramProvider: " + this.paramProvider;
        console.log(message);
        return message;
    };
    return MyParamService;
}());
exports.MyParamService = MyParamService;
var MyValueService = (function () {
    function MyValueService(valueProvider) {
        this.valueProvider = valueProvider;
    }
    MyValueService.prototype.invoke = function () {
        var message = "MyValueService.invoke() invoked! valueProvider: " + this.valueProvider;
        console.log(message);
        return message;
    };
    return MyValueService;
}());
MyValueService = __decorate([
    __param(0, core_1.Inject('valueProvider')),
    __metadata("design:paramtypes", [String])
], MyValueService);
exports.MyValueService = MyValueService;
var MySuperService = (function () {
    function MySuperService(user) {
        this.user = user;
    }
    MySuperService.prototype.invoke = function () {
        var message = "MySuperService.invoke() invoked! user: " + this.user.isSuper();
        console.log(message);
        return message;
    };
    return MySuperService;
}());
exports.MySuperService = MySuperService;
var MySubService = (function (_super) {
    __extends(MySubService, _super);
    function MySubService() {
        return _super.call(this, null) || this;
    }
    MySubService.prototype.invoke = function () {
        var message = "MySubService.invoke() invoked! user: " + null;
        console.log(message);
        return message;
    };
    return MySubService;
}(MySuperService));
exports.MySubService = MySubService;
var User = (function () {
    function User() {
    }
    User.prototype.isSuper = function () { return true; };
    return User;
}());
exports.User = User;
var LargeService = (function () {
    function LargeService() {
    }
    LargeService.prototype.invoke = function () {
        var message = "LargeService.invoke() invoked!";
        console.log(message);
        return message;
    };
    return LargeService;
}());
exports.LargeService = LargeService;
var SmallService = (function () {
    function SmallService() {
    }
    SmallService.prototype.invoke = function () {
        var message = "SmallService.invoke() invoked!";
        console.log(message);
        return message;
    };
    return SmallService;
}());
exports.SmallService = SmallService;
var SizeService = (function () {
    function SizeService() {
    }
    SizeService.prototype.getSizeService = function () {
        var size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (size < 800) {
            return new SmallService();
        }
        return new LargeService();
    };
    return SizeService;
}());
exports.SizeService = SizeService;
//# sourceMappingURL=myservice.service.js.map