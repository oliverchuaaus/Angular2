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
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var MultipartComponent = (function () {
    function MultipartComponent(http) {
        this.http = http;
        this.apiEndPoint = 'http://localhost:8080/ng2-my-upload-rest/rest/ftr/uploadMultipart';
    }
    MultipartComponent.prototype.uploadMultipart = function ($event) {
        var files = $event.target.files || $event.srcElement.files;
        var file = files[0];
        var formData = new FormData();
        formData.append("uploadFile", file);
        formData.append('key1', 'value1');
        formData.append('key2', 'value2');
        var req = new XMLHttpRequest();
        req.open("POST", "" + this.apiEndPoint);
        req.send(formData);
    };
    MultipartComponent.prototype.selectFile = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            var headers = new http_1.Headers();
            headers.append('Accept', 'application/json');
            var options = new http_1.RequestOptions({ headers: headers });
            this.http.post("" + this.apiEndPoint, formData, options)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return Observable_1.Observable.throw(error); })
                .subscribe(function (data) { return console.log('success'); }, function (error) { return console.log(error); });
        }
    };
    return MultipartComponent;
}());
MultipartComponent = __decorate([
    core_1.Component({
        selector: 'multipart-upload',
        template: "\n  <input #pcode value=\"12334\">\n  <input #pname value=\"Kefir\">\n  <input id=\"single_f_fileup\" type=\"file\" (change)=\"uploadMultipart($event)\" name=\"uploadFile\" />\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], MultipartComponent);
exports.MultipartComponent = MultipartComponent;
//# sourceMappingURL=multipart.component.js.map