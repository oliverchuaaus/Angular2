let strings: Array<string> = ['Abel', 'Cain', 'Seth'];
let strings2: Array<string> = ['Adam', 'Eve'];

let objects: Array<any> = [{ name: 'Abel' }, { name: 'Cain' }, { name: 'Seth' }];

////Check if object field existing in array
console.log('Cain found: ' + objects.some(obj => obj.name == 'Cain'));


console.log("concat: " + strings.concat(strings2, strings2));
console.log("every: " + strings.every(str => str.length == 4));
console.log("filter: " + strings.filter(str => str.charAt(0) == 'A'));
console.log("forEach: ");
strings.forEach(str => { console.log("\t" + str) });
console.log("indexOf: " + strings.indexOf("Cain"));
console.log("join: " + strings.join("&"));
console.log("lastIndexOf: " + strings.lastIndexOf("Cain"));
console.log("length: " + strings.length);
console.log("map: " + strings.map(str => "*" + str + "*"));
let longString = "";
console.log('reduce: ' + strings.reduce((longString, str) => longString + "&" + str));
longString = "";
console.log('reduceRight: ' + strings.reduceRight((longString, str) => longString + "&" + str));
console.log('slice: ' + strings.slice(1));
console.log('some: ' + strings.some(str => str == 'Abel'));
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

