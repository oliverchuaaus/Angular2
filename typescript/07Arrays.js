var strings = ['Abel', 'Cain', 'Seth'];
var strings2 = ['Adam', 'Eve'];
var objects = [{ name: 'Abel' }, { name: 'Cain' }, { name: 'Seth' }];
////Check if object field existing in array
console.log('Cain found: ' + objects.some(function (obj) { return obj.name == 'Cain'; }));
console.log("concat: " + strings.concat(strings2, strings2));
console.log("every: " + strings.every(function (str) { return str.length == 4; }));
console.log("filter: " + strings.filter(function (str) { return str.charAt(0) == 'A'; }));
console.log("forEach: ");
strings.forEach(function (str) { console.log("\t" + str); });
console.log("indexOf: " + strings.indexOf("Cain"));
console.log("join: " + strings.join("&"));
console.log("lastIndexOf: " + strings.lastIndexOf("Cain"));
console.log("length: " + strings.length);
console.log("map: " + strings.map(function (str) { return "*" + str + "*"; }));
var longString = "";
console.log('reduce: ' + strings.reduce(function (longString, str) { return longString + "&" + str; }));
longString = "";
console.log('reduceRight: ' + strings.reduceRight(function (longString, str) { return longString + "&" + str; }));
console.log('slice: ' + strings.slice(1));
console.log('some: ' + strings.some(function (str) { return str == 'Abel'; }));
console.log('valueOf: ' + strings.valueOf());
//Operations
console.log('strings: ' + strings);
//changes array
strings.push('Enos');
console.log('after push: ' + strings);
strings.pop();
console.log('after pop: ' + strings);
strings.shift();
console.log('after shift: ' + strings);
strings.unshift('Abel');
console.log('after unshift: ' + strings);
console.log('after reverse: ' + strings.reverse());
strings.reverse();
strings.splice(1, 0, 'Adam', 'Eve');
console.log('after splice: ' + strings);
console.log('after sort: ' + strings.sort());
//# sourceMappingURL=07Arrays.js.map