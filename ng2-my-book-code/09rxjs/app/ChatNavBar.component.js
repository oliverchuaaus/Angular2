"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CharNavBarComponent = (function () {
    function CharNavBarComponent() {
    }
    return CharNavBarComponent;
}());
CharNavBarComponent = __decorate([
    core_1.Component({
        selector: 'chat-nav-bar',
        template: "\n  <div style=\"float:left\">Chat!</div>\n  <div style=\"float:right\">Messages:</div>\n  <div style=\"float:clear\">&nbsp;</div>\n  "
    })
], CharNavBarComponent);
exports.CharNavBarComponent = CharNavBarComponent;
//# sourceMappingURL=ChatNavBar.component.js.map