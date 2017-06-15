"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Parent2Component = (function () {
    function Parent2Component() {
        this.myArr = [1, 4, 6, 8];
    }
    return Parent2Component;
}());
Parent2Component = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'parent2',
        template: "\n  <h1>Parent</h1>\n  <child2 [myArr1]=\"myArr\"></child2>\n  "
    })
], Parent2Component);
exports.Parent2Component = Parent2Component;
//# sourceMappingURL=parent2.component.js.map