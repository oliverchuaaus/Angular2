"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ng2_file_upload_1 = require("ng2-file-upload");
// const URL = '/api/';
//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var URL = 'http://localhost:8080/ng2-my-upload-rest/rest/ftr/uploader';
var FileUploadComponent = (function () {
    function FileUploadComponent() {
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    FileUploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    FileUploadComponent.prototype.uploadFile = function () {
        this.uploader.uploadAll();
    };
    return FileUploadComponent;
}());
FileUploadComponent = __decorate([
    core_1.Component({
        selector: 'simple-demo',
        templateUrl: '/app/fileUpload.html'
    })
], FileUploadComponent);
exports.FileUploadComponent = FileUploadComponent;
//# sourceMappingURL=fileUpload.component.js.map