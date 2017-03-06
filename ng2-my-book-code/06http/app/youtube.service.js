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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var URL = 'https://www.googleapis.com/youtube/v3/search';
var YoutubeService = (function () {
    function YoutubeService(http) {
        this.http = http;
    }
    YoutubeService.prototype.search = function (query) {
        var params = [
            "q=" + query,
            "key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk",
            "part=snippet",
            "type=video",
            "maxResults=10"
        ].join('&');
        var url = URL + '?' + params;
        return this.http.get(url)
            .map(function (resp) {
            return resp.json().items.map(function (item) {
                return new SearchResult(item.id.videoId, item.snippet.title, item.snippet.description, item.snippet.thumbnails.high.url);
            });
        });
    };
    YoutubeService.prototype.searchPromise = function (query) {
        var params = [
            "q=" + query,
            "key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk",
            "part=snippet",
            "type=video",
            "maxResults=10"
        ].join('&');
        var url = URL + '?' + params;
        return this.http.get(url).toPromise()
            .then(function (resp) {
            return resp.json().items.map(function (item) {
                return new SearchResult(item.id.videoId, item.snippet.title, item.snippet.description, item.snippet.thumbnails.high.url);
            });
        });
    };
    return YoutubeService;
}());
YoutubeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], YoutubeService);
exports.YoutubeService = YoutubeService;
var SearchResult = (function () {
    function SearchResult(id, title, description, url) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.vidurl = "https://www.youtube.com/watch?v=" + this.id;
    }
    return SearchResult;
}());
exports.SearchResult = SearchResult;
//# sourceMappingURL=youtube.service.js.map