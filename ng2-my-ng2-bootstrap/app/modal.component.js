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
var ModalComponent = (function () {
    function ModalComponent() {
        this.message = "This is static modal, backdrop click will not close it. Click <b>&times;</b> to close modal.";
    }
    ModalComponent.prototype.show2 = function () {
        this.staticModal.show();
    };
    ModalComponent.prototype.showMessage = function (str) {
        this.message = str;
        this.staticModal.show();
    };
    ModalComponent.prototype.showMessageCallback = function (str, f) {
        this.message = str;
        this.staticModal.show();
        f();
    };
    return ModalComponent;
}());
__decorate([
    core_1.ViewChild('staticModal'),
    __metadata("design:type", Object)
], ModalComponent.prototype, "staticModal", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: 'my-modal',
        exportAs: 'child',
        template: "\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"staticModal.show()\">Static modal</button>\n\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"show2()\">Static modal 2</button>\n \n<div class=\"modal fade\" bsModal #staticModal=\"bs-modal\"\n [config]=\"{backdrop: 'static'}\"\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Static modal</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">{{message}}</div>\n    </div>\n  </div>\n</div>\n "
    })
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map