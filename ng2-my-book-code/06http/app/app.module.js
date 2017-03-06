"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var http_component_1 = require("./http.component");
var youtube_component_1 = require("./youtube.component");
var youtube_service_1 = require("./youtube.service");
var keyup_youtube_component_1 = require("./keyup.youtube.component");
var observable_youtube_component_1 = require("./observable.youtube.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, http_component_1.HttpComponent, youtube_component_1.YoutubeComponent, keyup_youtube_component_1.KeyUpYoutubeComponent, observable_youtube_component_1.ObservableYoutubeComponent, observable_youtube_component_1.SearchResultComponent, observable_youtube_component_1.SearchBox,],
        bootstrap: [app_component_1.AppComponent],
        providers: [youtube_service_1.YoutubeService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map