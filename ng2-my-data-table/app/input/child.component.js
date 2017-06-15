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
var ChildComponent = (function () {
    function ChildComponent() {
        console.log("in constructor:" + this.myArray);
    }
    ChildComponent.prototype.ngAfterViewInit = function () {
        console.log("in ngAfterViewInit:" + this.myArray);
    };
    ChildComponent.prototype.ngOnInit = function () {
        console.log("in ngOnInit:" + this.myArray);
    };
    return ChildComponent;
}());
__decorate([
    core_1.Input('my-arr'),
    __metadata("design:type", Object)
], ChildComponent.prototype, "myArray", void 0);
ChildComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'child',
        template: "\n  <h1>Child</h1>\n  {{\"myArray: \"+myArray}}\n  ",
    }),
    __metadata("design:paramtypes", [])
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map