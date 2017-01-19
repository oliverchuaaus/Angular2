/*
Data Types:
number
string
boolean
any
arrays
void
*/ 

var burger:string = "hamburger",
 calories: number = 300,
tasty: boolean = true;
//var tasty: boolean = "I haven't tried it yet";
//error: Type 'string' is not assignable to type 'boolean'.

function speak(food:string, energy:number): void {
    console.log("Our " + food + " has " + energy + " calories.");
}

speak(burger, calories);
//speak("triple cheesburger", "a ton of");
//error: Argument of type 'string' is not assignable to parameter of type 'number'.

//two ways to declare arrays
var arr:number[], arr2:Array<number>;
arr=[];
//need to initialise, otherwise when assigning value to array, 
//error: Cannot set property '0' of undefined
arr[0]=1;
arr2=[];
arr2[0]=2;
//arr2[0]='rubbish';
//error: type 'string' is not assignable to type 'number'.



