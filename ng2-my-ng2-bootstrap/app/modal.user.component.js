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
var ModalUserComponent = (function () {
    function ModalUserComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ModalUserComponent.prototype.show3 = function () {
        //this.c.showMessage("Hello World");
        this.c.showMessageCallback("Hello World", function () { console.log("Test"); });
    };
    return ModalUserComponent;
}());
__decorate([
    core_1.ViewChild('c'),
    __metadata("design:type", Object)
], ModalUserComponent.prototype, "c", void 0);
ModalUserComponent = __decorate([
    core_1.Component({
        selector: 'my-modal-user',
        template: "\n   <a class=\"btn btn-success\" (click)=\"c.show2()\">c.show2()</a>\n   <a class=\"btn btn-success\" (click)=\"show3()\">show3()</a>\n\n   <my-modal #c=\"child\"></my-modal>    \n    "
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], ModalUserComponent);
exports.ModalUserComponent = ModalUserComponent;
//# sourceMappingURL=modal.user.component.js.map