// The following are equivalent, the same signature will be infered by the
// compiler, and same JavaScript will be emitted
var f1 = function (i) { return i * i; };
// Return type inferred
var f2 = function (i) { return i * i; };
// "Fat arrow" syntax
var f3 = function (i) { return i * i; };
// "Fat arrow" syntax with return type inferred
var f4 = function (i) { return i * i; };
// "Fat arrow" syntax with return type inferred, braceless means no return
// keyword needed
var f5 = function (i) { return i * i; };
console.log('f1: ' + f1(1));
console.log('f2: ' + f2(2));
console.log('f3: ' + f3(3));
console.log('f4: ' + f4(4));
console.log('f5: ' + f5(5));
//# sourceMappingURL=09Functions.js.map