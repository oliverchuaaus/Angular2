"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var route_component_1 = require("./route.component");
var auth_component_1 = require("./auth.component");
var nested_component_1 = require("./nested.component");
var product_component_1 = require("./product.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: route_component_1.HomeComponent },
    { path: 'detail/:id', component: route_component_1.DetailComponent },
    { path: 'login', component: auth_component_1.LoginComponent },
    { path: 'restricted', component: auth_component_1.RestrictedComponent, canActivate: [auth_service_1.LoggedInGuard] },
    { path: 'about', component: route_component_1.AboutComponent },
    { path: 'product', component: product_component_1.ProductComponent, children: product_component_1.childRoutes },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routes)],
        declarations: [app_component_1.AppComponent, route_component_1.RouteComponent, route_component_1.HomeComponent, route_component_1.DetailComponent, route_component_1.AboutComponent,
            auth_component_1.AuthComponent, auth_component_1.RestrictedComponent, auth_component_1.LoginComponent,
            nested_component_1.NestedComponent, product_component_1.ProductComponent, product_component_1.MainProductComponent, product_component_1.SearchProductComponent, product_component_1.MaintainProductComponent, product_component_1.DetailProductComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, auth_service_1.AuthService, auth_service_1.LoggedInGuard]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map