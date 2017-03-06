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
var HttpComponent = (function () {
    function HttpComponent(http) {
        this.http = http;
        this.loading = false;
        this.error = false;
    }
    HttpComponent.prototype.onGet = function () {
        var _this = this;
        this.response = "";
        this.loading = true;
        this.error = false;
        this.http.get('http://jsonplaceholder.typicode.com/posts/1').subscribe(function (resp) { _this.response = resp.json(); _this.loading = false; }, function (err) { console.log(err); _this.error = true; _this.loading = false; });
    };
    HttpComponent.prototype.onDelete = function () {
        var _this = this;
        this.response = "";
        this.loading = true;
        this.error = false;
        this.http.delete('http://jsonplaceholder.typicode.com/posts/1').subscribe(function (resp) { _this.response = resp.json(); _this.loading = false; }, function (err) { console.log(err); _this.error = true; _this.loading = false; });
    };
    HttpComponent.prototype.onPost = function (body) {
        var _this = this;
        this.response = "";
        this.loading = true;
        this.error = false;
        var obj = {
            id: '1',
            body: "" + body
        };
        var requestBody = JSON.stringify(obj);
        this.http.post('http://jsonplaceholder.typicode.com/posts', requestBody).subscribe(function (resp) { _this.response = resp.json(); _this.loading = false; }, function (err) { console.log(err); _this.error = true; _this.loading = false; });
    };
    HttpComponent.prototype.onPut = function (body) {
        var _this = this;
        this.response = "";
        this.loading = true;
        this.error = false;
        var obj = {
            id: '1',
            body: "" + body
        };
        var requestBody = JSON.stringify(obj);
        this.http.put('http://jsonplaceholder.typicode.com/posts/1', requestBody).subscribe(function (resp) { _this.response = resp.json(); _this.loading = false; }, function (err) { console.log(err); _this.error = true; _this.loading = false; });
    };
    return HttpComponent;
}());
HttpComponent = __decorate([
    core_1.Component({
        selector: 'http',
        template: "\n  <div><textarea #body></textarea></div>\n  \n  <button (click)=\"onPost(body.value)\">Post</button>\n   <button (click)=\"onPut(body.value)\">Put</button>\n  <button (click)=\"onGet()\">Get</button>\n  <button (click)=\"onDelete()\">Delete</button>\n\n  <div *ngIf=\"loading\">Loading...</div>\n  <div *ngIf=\"rrror\">Error!</div>\n   <div *ngIf=\"response\">\n  {{response|json}}\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], HttpComponent);
exports.HttpComponent = HttpComponent;
//# sourceMappingURL=http.component.js.map