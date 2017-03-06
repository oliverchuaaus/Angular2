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
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var AuthComponent = (function () {
    function AuthComponent(router) {
        this.router = router;
    }
    return AuthComponent;
}());
AuthComponent = __decorate([
    core_1.Component({
        selector: 'auth-route',
        template: "\n  <h1>Routing</h1>\n  <a routerLink=\"/login\">Login</a>\n  <a routerLink=\"/home\">Home</a>\n  <a routerLink=\"/detail/1001\">Detail</a>\n  <a routerLink=\"/restricted\">Restricted</a>\n  <a routerLink=\"/about\">About</a>\n  <router-outlet></router-outlet>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AuthComponent);
exports.AuthComponent = AuthComponent;
var RestrictedComponent = (function () {
    function RestrictedComponent() {
    }
    return RestrictedComponent;
}());
RestrictedComponent = __decorate([
    core_1.Component({
        selector: 'restricted',
        template: "\n  \n  <h3>Restricted</h3>\n  "
    })
], RestrictedComponent);
exports.RestrictedComponent = RestrictedComponent;
var LoginComponent = (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.login = function (username, password) {
        var loggedIn = this.authService.login(username, password);
        if (!loggedIn) {
            this.errorMessage = "Login invalid";
            setTimeout(function () {
                this.errorMessage = '';
            }.bind(this), 2500);
        }
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: "\n  <h3>Login Page</h3>\n  <div *ngIf=\"!authService.isLoggedIn()\"> \n  <input #username>\n  <input type=\"password\" #password>\n  <button (click)=\"login(username.value, password.value)\">Login</button>\n  <div *ngIf=\"!errorMessage\">{{errorMessage}}</div>\n  </div>\n\n   <div *ngIf=\"authService.isLoggedIn()\">\n      Logged in as {{authService.getUsername()}}.\n      <a href=\"logout\" (click)=\"logout()\">Logout</a> \n   </div> \n  "
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=auth.component.js.map