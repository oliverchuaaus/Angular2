/*
Data Types:
number
string
boolean
any
arrays
void
*/
var burger = "hamburger", calories = 300, tasty = true;
//var tasty: boolean = "I haven't tried it yet";
//error: Type 'string' is not assignable to type 'boolean'.
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
speak(burger, calories);
//speak("triple cheesburger", "a ton of");
//error: Argument of type 'string' is not assignable to parameter of type 'number'.
//two ways to declare arrays
var arr, arr2;
arr = [];
//need to initialise, otherwise when assigning value to array, 
//error: Cannot set property '0' of undefined
arr[0] = 1;
arr2 = [];
arr2[0] = 2;
//arr2[0]='rubbish';
//error: type 'string' is not assignable to type 'number'.
//# sourceMappingURL=01StaticTyping.js.map