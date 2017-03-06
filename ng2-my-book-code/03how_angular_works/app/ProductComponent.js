"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ProductComponent = (function () {
    function ProductComponent() {
    }
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'product',
        inputs: ['product'],
        host: { 'class': 'productClass' },
        template: "\n  <h3>Product</h3>\n  <div>Code: {{product.code}}</div>\n  <div>Name: {{product.name}}</div>\n  <div>Department: {{product.department}}</div>\n  "
    })
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=ProductComponent.js.map