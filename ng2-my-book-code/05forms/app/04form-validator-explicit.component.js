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
var forms_1 = require("@angular/forms");
var MyFormValidatorExplicitComponent = (function () {
    function MyFormValidatorExplicitComponent(builder) {
        this.f = builder.group({ 'pcode': ['', forms_1.Validators.required] });
        this.pcode = this.f.controls['pcode'];
    }
    MyFormValidatorExplicitComponent.prototype.submit = function (myForm) {
        console.log("submitted " + myForm['pcode']);
    };
    return MyFormValidatorExplicitComponent;
}());
MyFormValidatorExplicitComponent = __decorate([
    core_1.Component({
        selector: 'my-form-validator-explicit',
        template: "\n  <form [formGroup]=\"f\" (ngSubmit)=\"submit(f.value)\">\n    <div>Explicit Validator:</div>\n    <div><input placeholder=\"pcode\" [formControl]=\"pcode\" \n    [ngStyle] =\"!pcode.valid && pcode.dirty ? { 'background-color':'red'} : { 'background-color':'transparent'}\">\n    <div *ngIf=\"!pcode.valid && pcode.dirty\">Product Code is invalid</div>\n    <div *ngIf=\"pcode.hasError('required') && pcode.dirty\">Product Code is required</div>\n    </div>\n    <div><button type=\"submit\">Submit</button></div>\n    <div *ngIf=\"!f.valid && f.dirty\">Form is invalid</div>\n  </form>\n  "
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], MyFormValidatorExplicitComponent);
exports.MyFormValidatorExplicitComponent = MyFormValidatorExplicitComponent;
//# sourceMappingURL=04form-validator-explicit.component.js.map