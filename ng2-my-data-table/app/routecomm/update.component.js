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
var comm_service_1 = require("./comm.service");
var UpdateComponent = (function () {
    function UpdateComponent(commService) {
        this.commService = commService;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        this.commService.updatePositionID("");
    };
    UpdateComponent.prototype.findPosition = function (positionID) {
        this.commService.updatePositionID(positionID);
    };
    return UpdateComponent;
}());
UpdateComponent = __decorate([
    core_1.Component({
        selector: 'update',
        template: "\n  <h1>Update</h1>\n  PositionID: <input #positionID>\n  <input type=\"button\" (click)=\"findPosition(positionID.value)\" value=\"Search\"> \n  "
    }),
    __metadata("design:paramtypes", [comm_service_1.CommService])
], UpdateComponent);
exports.UpdateComponent = UpdateComponent;
//# sourceMappingURL=update.component.js.map