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
var RouteComponent = (function () {
    function RouteComponent() {
    }
    return RouteComponent;
}());
RouteComponent = __decorate([
    core_1.Component({
        selector: 'simple-route',
        template: "\n  <h1>Routing</h1>\n  <a routerLink=\"/home\">Home</a>\n  <a routerLink=\"/detail/1001\">Detail</a>\n  <a routerLink=\"/about\">About</a>\n  <router-outlet></router-outlet>\n\n  "
    })
], RouteComponent);
exports.RouteComponent = RouteComponent;
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: "\n  <h3>Home</h3>\n  "
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
var DetailComponent = (function () {
    function DetailComponent(route) {
        var _this = this;
        this.route = route;
        route.params.subscribe(function (params) { _this.id = params['id']; });
    }
    return DetailComponent;
}());
DetailComponent = __decorate([
    core_1.Component({
        selector: 'detail',
        template: "\n  <h3>Detail {{id}}</h3>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], DetailComponent);
exports.DetailComponent = DetailComponent;
var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about',
        template: "\n  <h3>About</h3>\n  "
    })
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=route.component.js.map