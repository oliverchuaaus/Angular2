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
var core_1 = require("@angular/core");
var youtube_service_1 = require("./youtube.service");
var YoutubeComponent = (function () {
    function YoutubeComponent(yt, el) {
        this.yt = yt;
        this.el = el;
    }
    YoutubeComponent.prototype.onClick = function (query) {
        var _this = this;
        this.yt.searchPromise(query).then(function (searchResults) {
            _this.results = searchResults;
        });
    };
    return YoutubeComponent;
}());
YoutubeComponent = __decorate([
    core_1.Component({
        selector: 'youtube',
        template: "\n  <input #query placeholder=\"query\" autofocus>\n  <button (click)=\"onClick(query.value)\">Search</button>\n\n<ul>\n  <li *ngFor=\"let result of results\">\n    <div>Id:{{result.id}}</div>\n    <div>Title:{{result.title}}</div>\n    <div>Desc:{{result.description}}</div>\n    <div>URL:{{result.url}}</div>\n    <div><img src=\"{{result.url}}\"></div>\n  </li>\n</ul>\n\n  ",
    }),
    __metadata("design:paramtypes", [youtube_service_1.YoutubeService, core_1.ElementRef])
], YoutubeComponent);
exports.YoutubeComponent = YoutubeComponent;
//# sourceMappingURL=youtube.component.js.map