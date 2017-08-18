//https://learnxinyminutes.com/docs/typescript/
// Modules, "." can be used as separator for sub modules
var Geometry;
(function (Geometry) {
    var Square = (function () {
        function Square(sideLength) {
            if (sideLength === void 0) { sideLength = 0; }
            this.sideLength = sideLength;
        }
        Square.prototype.area = function () {
            return Math.pow(this.sideLength, 2);
        };
        return Square;
    }());
    Geometry.Square = Square;
})(Geometry || (Geometry = {}));
var s1 = new Geometry.Square(5);
console.log('5 squared = ' + s1.area());
// Local alias for referencing a module
var G = Geometry;
var s2 = new G.Square(10);
console.log('10 squared = ' + s2.area());
//# sourceMappingURL=08Modules.js.map