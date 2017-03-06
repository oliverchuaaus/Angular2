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
var Product_1 = require("./Product");
var ProductCatalogComponent = (function () {
    function ProductCatalogComponent() {
        this.productList = [];
        this.selectedProducts = [];
    }
    ProductCatalogComponent.prototype.ngOnInit = function () {
        this.productList.push(new Product_1.Product("10101", "Running Shoes", ["Shoes", "Rubber"]));
        this.productList.push(new Product_1.Product("20202", "Ballet Shoes", ["Shoes", "Cloth"]));
        this.productList.push(new Product_1.Product("30303", "Kung Fu Shoes", ["Shoes", "Canvas"]));
    };
    ProductCatalogComponent.prototype.productSelected = function (product) {
        console.log('Selected ' + product.name + ' in catalog');
        this.selectedProducts.push(product);
    };
    return ProductCatalogComponent;
}());
ProductCatalogComponent = __decorate([
    core_1.Component({
        selector: 'catalog',
        template: "\n  <h1>Product Catalog</h1>\n  <product-list [productList]=\"productList\" (onProductSelect)=\"productSelected($event)\"></product-list>\n  <selected-products [selectedProducts]=\"selectedProducts\"></selected-products>\n  "
    }),
    __metadata("design:paramtypes", [])
], ProductCatalogComponent);
exports.ProductCatalogComponent = ProductCatalogComponent;
//# sourceMappingURL=ProductCatalogComponent.js.map