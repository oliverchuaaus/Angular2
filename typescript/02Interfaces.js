// We tell our function to expect an object that fulfills the Food interface. 
// This way we know that the properties we need will always be available.
function speakb(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
    name: "ice cream",
    calories: 200
};
speakb(ice_cream);
var candy = {
    nmae: "ice cream",
    calories: 200
};
//speakb(candy); 
//error: Argument of type '{ nmae: string; calories: number; } is not assignable to parameter of type 'Food'. 
//Property 'name' is missing in type '{ nmae: string; calories: number; }'.
//Wrong names, missing fields not allowed
//How about extra fields? Allowed
var ice_cream_b = {
    name: "ice cream",
    calories: 200,
    extra: 100
};
speakb(ice_cream_b);
//# sourceMappingURL=02Interfaces.js.map