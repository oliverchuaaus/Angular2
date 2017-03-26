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
var DemoFormWithValidationsShorthand = (function () {
    function DemoFormWithValidationsShorthand(fb) {
        this.myForm = fb.group({
            'sku': ['', forms_1.Validators.required]
        });
    }
    DemoFormWithValidationsShorthand.prototype.onSubmit = function (value) {
        console.log('you submitted value:', value.sku);
    };
    return DemoFormWithValidationsShorthand;
}());
DemoFormWithValidationsShorthand = __decorate([
    core_1.Component({
        selector: 'demo-form-with-validations-shorthand',
        template: "\n<div class=\"ui raised segment\">\n  <h2 class=\"ui header\">Demo Form: with validations (shorthand)</h2>\n  <form [formGroup]=\"myForm\"\n        (ngSubmit)=\"onSubmit(myForm.value)\"\n        class=\"ui form\">\n\n    <div class=\"field\"\n      [class.error]=\"!myForm.get('sku').valid && myForm.get('sku').touched\">\n      <label for=\"skuInput\">SKU</label>\n      <input type=\"text\"\n             id=\"skuInput\"\n             placeholder=\"SKU\"\n             [formControl]=\"myForm.controls['sku']\">\n       <div *ngIf=\"!myForm.controls['sku'].valid\"\n         class=\"ui error message\">SKU is invalid</div>\n       <div *ngIf=\"myForm.controls['sku'].hasError('required')\"\n         class=\"ui error message\">SKU is required</div>\n    </div>\n\n    <div *ngIf=\"!myForm.valid\"\n      class=\"ui error message\">Form is invalid</div>\n\n    <button type=\"submit\" class=\"ui button\">Submit</button>\n  </form>\n</div>\n  "
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], DemoFormWithValidationsShorthand);
exports.DemoFormWithValidationsShorthand = DemoFormWithValidationsShorthand;
//# sourceMappingURL=demo_form_with_validations_shorthand.js.map