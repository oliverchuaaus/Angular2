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
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var SearchBox = (function () {
    function SearchBox(youtube, el) {
        this.youtube = youtube;
        this.el = el;
        this.loading = new core_1.EventEmitter();
        this.results = new core_1.EventEmitter();
    }
    SearchBox.prototype.ngOnInit = function () {
        var _this = this;
        // convert the `keyup` event into an observable stream
        Observable_1.Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map(function (e) { return e.target.value; }) // extract the value of the input
            .filter(function (text) { return text.length > 1; }) // filter out if empty
            .debounceTime(250) // only once every 250ms
            .do(function () { return _this.loading.next(true); }) // enable loading
            .map(function (query) { return _this.youtube.search(query); })
            .switch()
            .subscribe(function (results) {
            _this.loading.next(false);
            _this.results.next(results);
        }, function (err) {
            console.log(err);
            _this.loading.next(false);
        }, function () {
            _this.loading.next(false);
        });
    };
    return SearchBox;
}());
SearchBox = __decorate([
    core_1.Component({
        outputs: ['loading', 'results'],
        selector: 'search-box',
        template: "\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" autofocus>\n  "
    }),
    __metadata("design:paramtypes", [youtube_service_1.YoutubeService,
        core_1.ElementRef])
], SearchBox);
exports.SearchBox = SearchBox;
var SearchResultComponent = (function () {
    function SearchResultComponent() {
    }
    return SearchResultComponent;
}());
SearchResultComponent = __decorate([
    core_1.Component({
        inputs: ['result'],
        selector: 'search-result',
        template: "\n   <div class=\"col-sm-6 col-md-3\">\n      <div class=\"thumbnail\">\n        <img src=\"{{result.url}}\">\n        <div class=\"caption\">\n          <h3>{{result.title}}</h3>\n          <p>{{result.description}}</p>\n          <p><a href=\"{{result.url}}\"\n                class=\"btn btn-default\" role=\"button\">Watch</a></p>\n        </div>\n      </div>\n    </div>\n  "
    })
], SearchResultComponent);
exports.SearchResultComponent = SearchResultComponent;
var ObservableYoutubeComponent = (function () {
    function ObservableYoutubeComponent() {
    }
    ObservableYoutubeComponent.prototype.updateResults = function (results) {
        this.results = results;
        // console.log("results:", this.results); // uncomment to take a look
    };
    return ObservableYoutubeComponent;
}());
ObservableYoutubeComponent = __decorate([
    core_1.Component({
        selector: 'observable-youtube',
        template: "\n  <div class='container'>\n      <div class=\"page-header\">\n        <h1>YouTube Search</h1>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-group input-group-lg col-md-12\">\n          <search-box\n             (loading)=\"loading = $event\"\n             (results)=\"updateResults($event)\"\n              ></search-box>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <search-result\n          *ngFor=\"let result of results\"\n          [result]=\"result\">\n        </search-result>\n      </div>\n  </div>\n  "
    })
], ObservableYoutubeComponent);
exports.ObservableYoutubeComponent = ObservableYoutubeComponent;
//# sourceMappingURL=observable.youtube.component.js.map