"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
/*
 * Components
 */
var HomeComponent_1 = require("./components/HomeComponent");
var AboutComponent_1 = require("./components/AboutComponent");
var ContactComponent_1 = require("./components/ContactComponent");
var ProtectedComponent_1 = require("./components/ProtectedComponent");
var LoginComponent_1 = require("./components/LoginComponent");
var common_1 = require("@angular/common");
var AuthService_1 = require("./services/AuthService");
var loggedIn_guard_1 = require("./guards/loggedIn.guard");
var router_1 = require("@angular/router");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent_1.HomeComponent },
    { path: 'about', component: AboutComponent_1.AboutComponent },
    { path: 'contact', component: ContactComponent_1.ContactComponent },
    { path: 'contactus', redirectTo: 'contact' },
    { path: 'protected', component: ProtectedComponent_1.ProtectedComponent,
        canActivate: [loggedIn_guard_1.LoggedInGuard] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes) // <-- routes 
        ],
        declarations: [app_component_1.AppComponent,
            HomeComponent_1.HomeComponent,
            AboutComponent_1.AboutComponent,
            ContactComponent_1.ContactComponent,
            ProtectedComponent_1.ProtectedComponent,
            LoginComponent_1.LoginComponent,
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            AuthService_1.AUTH_PROVIDERS,
            loggedIn_guard_1.LoggedInGuard,
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map