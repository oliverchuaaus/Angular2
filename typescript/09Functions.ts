// The following are equivalent, the same signature will be infered by the
// compiler, and same JavaScript will be emitted
let f1 = function (i: number): number { return i * i; }
// Return type inferred
let f2 = function (i: number) { return i * i; }
// "Fat arrow" syntax
let f3 = (i: number): number => { return i * i; }
// "Fat arrow" syntax with return type inferred
let f4 = (i: number) => { return i * i; }
// "Fat arrow" syntax with return type inferred, braceless means no return
// keyword needed
let f5 = (i: number) => i * i;

console.log('f1: '+f1(1));
console.log('f2: '+f2(2));
console.log('f3: '+f3(3));
console.log('f4: '+f4(4));
console.log('f5: '+f5(5));