"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onSubmit = function (form) {
        console.log('submitted form: ' + form.sku);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n<!--  \n  <demo-form-ng-model></demo-form-ng-model>\n  <demo-form-with-events></demo-form-with-events>\n  <demo-form-with-custom-validations></demo-form-with-custom-validations>\n  <demo-form-with-validations-shorthand></demo-form-with-validations-shorthand>\n  <demo-form-with-validations-explicit></demo-form-with-validations-explicit>\n  <demo-form-sku-builder></demo-form-sku-builder>\n  <demo-form-sku></demo-form-sku>\n-->\n  <demo-form-ng-model></demo-form-ng-model>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map