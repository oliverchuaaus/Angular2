//https://learnxinyminutes.com/docs/typescript/

// Modules, "." can be used as separator for sub modules
module Geometry {
  export class Square {
    constructor(public sideLength: number = 0) {
    }
    area() {
      return Math.pow(this.sideLength, 2);
    }
  }
}

let s1 = new Geometry.Square(5);
console.log('5 squared = '+s1.area());

// Local alias for referencing a module
import G = Geometry;

let s2 = new G.Square(10);
console.log('10 squared = '+s2.area());
