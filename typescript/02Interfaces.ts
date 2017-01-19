// Here we define our Food interface, its properties, and their types.
interface Food {
    name: string;
    calories: number;
}

// We tell our function to expect an object that fulfills the Food interface. 
// This way we know that the properties we need will always be available.
function speakb(food: Food): void{
  console.log("Our " + food.name + " has " + food.calories + " calories.");
}

// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
  name: "ice cream", 
  calories: 200
}

speakb(ice_cream);

var candy = {
  nmae: "ice cream", 
  calories: 200
}

//speakb(candy);
//error: Argument of type '{ nmae: string; calories: number; } is not assignable to parameter of type 'Food'. 
//Property 'name' is missing in type '{ nmae: string; calories: number; }'.