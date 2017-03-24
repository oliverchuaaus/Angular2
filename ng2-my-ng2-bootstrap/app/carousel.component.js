"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CarouselComponent = (function () {
    function CarouselComponent() {
    }
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    core_1.Component({
        selector: 'my-carousel',
        template: "\n<div style=\"width: 450px; margin: 0 auto\" >    \n<carousel style=\"margin: 0 auto\" >\n  <slide>\n    <img src=\"assets/images/greece/1.jpg\" alt=\"First slide\">\n  </slide>\n  <slide>\n    <img src=\"assets/images/greece/2.jpg\" alt=\"Second slide\">\n  </slide>\n  <slide>\n    <img src=\"assets/images/greece/3.jpg\" alt=\"Third slide\">\n  </slide>\n</carousel>\n</div>\n "
    })
], CarouselComponent);
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map