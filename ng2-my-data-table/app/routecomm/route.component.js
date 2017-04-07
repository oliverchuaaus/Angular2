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
var RouteComponent = (function () {
    function RouteComponent(commService) {
        var _this = this;
        this.commService = commService;
        commService.positionIDConfirmed$.subscribe(function (positionID) {
            console.log("informed route of positionID: " + positionID);
            _this.positionID = positionID;
        });
    }
    return RouteComponent;
}());
RouteComponent = __decorate([
    core_1.Component({
        selector: 'route',
        template: "\n  <h1>Routes:</h1>\n  <a href=\"#\" routerLink=\"/update\">Update</a>\n  <a href=\"#\" routerLink=\"/history/{{positionID}}\">History</a>\n\n  <router-outlet></router-outlet>\n  "
    }),
    __metadata("design:paramtypes", [comm_service_1.CommService])
], RouteComponent);
exports.RouteComponent = RouteComponent;
//# sourceMappingURL=route.component.js.map