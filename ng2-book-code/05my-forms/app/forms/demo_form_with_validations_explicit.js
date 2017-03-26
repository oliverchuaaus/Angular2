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
/* tslint:disable:no-string-literal */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DemoFormWithValidationsExplicit = (function () {
    function DemoFormWithValidationsExplicit(fb) {
        this.myForm = fb.group({
            'sku': ['', forms_1.Validators.required]
        });
        this.sku = this.myForm.controls['sku'];
    }
    DemoFormWithValidationsExplicit.prototype.onSubmit = function (form) {
        if (form.valid) {
            console.log('you submitted value: ', form.value);
        }
        else {
            console.log('INVALID!');
        }
    };
    return DemoFormWithValidationsExplicit;
}());
DemoFormWithValidationsExplicit = __decorate([
    core_1.Component({
        selector: 'demo-form-with-validations-explicit',
        template: "\n  <div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Demo Form: with validations (explicit)</h2>\n    <form [formGroup]=\"myForm\"\n          (ngSubmit)=\"onSubmit(myForm)\"\n          class=\"ui form\">\n\n      <div class=\"field\"\n          [class.error]=\"!sku.valid && sku.touched\">\n        <label for=\"skuInput\">SKU</label>\n        <input type=\"text\"\n               id=\"skuInput\"\n               placeholder=\"SKU\"\n               [formControl]=\"sku\">\n         <div *ngIf=\"!sku.valid\"\n           class=\"ui error message\">SKU is invalid</div>\n         <div *ngIf=\"sku.hasError('required')\"\n           class=\"ui error message\">SKU is required</div>\n      </div>\n\n      <div *ngIf=\"!myForm.valid\"\n        class=\"ui error message\">Form is invalid</div>\n\n      <button type=\"submit\" class=\"ui button\">Submit</button>\n    </form>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], DemoFormWithValidationsExplicit);
exports.DemoFormWithValidationsExplicit = DemoFormWithValidationsExplicit;
//# sourceMappingURL=demo_form_with_validations_explicit.js.map