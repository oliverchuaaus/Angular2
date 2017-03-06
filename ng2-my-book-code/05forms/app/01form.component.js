"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MyFormComponent = (function () {
    function MyFormComponent() {
    }
    MyFormComponent.prototype.submit = function (myForm) {
        console.log("submitted " + myForm['pcode']);
        return false;
    };
    return MyFormComponent;
}());
MyFormComponent = __decorate([
    core_1.Component({
        selector: 'my-form',
        template: "\n  <form #f=\"ngForm\" (ngSubmit)=\"submit(f.value)\">\n    <div>Submit Field</div>\n    <div><input #pcode placeholder=\"pcode\" name=\"pcode\" ngModel></div>\n    <div><button type=\"submit\">Submit</button></div>\n  </form>\n  "
    })
], MyFormComponent);
exports.MyFormComponent = MyFormComponent;
//# sourceMappingURL=01form.component.js.map