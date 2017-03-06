"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GreetingComponent = (function () {
    function GreetingComponent() {
    }
    return GreetingComponent;
}());
GreetingComponent = __decorate([
    core_1.Component({
        selector: 'greeting',
        template: "\n  <h4>Hello!</h4>\n  <salutation></salutation>\n  "
    })
], GreetingComponent);
exports.GreetingComponent = GreetingComponent;
var SalutationComponent = (function () {
    function SalutationComponent() {
    }
    return SalutationComponent;
}());
SalutationComponent = __decorate([
    core_1.Component({
        selector: 'salutation',
        template: "\n  <h4>Salutations!</h4>\n  "
    })
], SalutationComponent);
exports.SalutationComponent = SalutationComponent;
//# sourceMappingURL=greeting.component.js.map