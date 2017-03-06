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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MainProductComponent = (function () {
    function MainProductComponent() {
    }
    return MainProductComponent;
}());
MainProductComponent = __decorate([
    core_1.Component({
        selector: 'main',
        template: "\n  <h3>Main</h3>\n  "
    })
], MainProductComponent);
exports.MainProductComponent = MainProductComponent;
var SearchProductComponent = (function () {
    function SearchProductComponent() {
    }
    return SearchProductComponent;
}());
SearchProductComponent = __decorate([
    core_1.Component({
        selector: 'search',
        template: "\n  <h3>Search</h3>\n  "
    })
], SearchProductComponent);
exports.SearchProductComponent = SearchProductComponent;
var MaintainProductComponent = (function () {
    function MaintainProductComponent() {
    }
    return MaintainProductComponent;
}());
MaintainProductComponent = __decorate([
    core_1.Component({
        selector: 'maintain',
        template: "\n  <h3>Maintain</h3>\n  "
    })
], MaintainProductComponent);
exports.MaintainProductComponent = MaintainProductComponent;
var DetailProductComponent = (function () {
    function DetailProductComponent(route) {
        var _this = this;
        this.route = route;
        route.params.subscribe(function (params) { _this.id = params['id']; });
    }
    return DetailProductComponent;
}());
DetailProductComponent = __decorate([
    core_1.Component({
        selector: 'detail',
        template: "\n  <h3>Detail {{id}}</h3>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], DetailProductComponent);
exports.DetailProductComponent = DetailProductComponent;
var ProductComponent = (function () {
    function ProductComponent() {
    }
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'product',
        template: "\n  <h3>Product</h3>\n  <a routerLink=\"./main\">Main</a>\n  <a routerLink=\"./search\">Search</a>\n  <a routerLink=\"./maintain\">Maintain</a>\n  <a routerLink=\"./detail/123456\">Detail</a>\n  <div>\n  <router-outlet></router-outlet>\n  </div>\n  "
    })
], ProductComponent);
exports.ProductComponent = ProductComponent;
exports.childRoutes = [
    { path: '', redirectTo: 'maintain' },
    { path: 'main', component: MainProductComponent },
    { path: 'search', component: SearchProductComponent },
    { path: 'maintain', component: MaintainProductComponent },
    { path: 'detail/:id', component: DetailProductComponent },
];
//# sourceMappingURL=product.component.js.map