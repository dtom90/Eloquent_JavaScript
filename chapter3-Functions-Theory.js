
/* Defining a Function */

const square = function(x) {
  return x * x;
};

console.log(square(12));

const makeNoise = function(){
  console.log("Pling!");
};

// Functions that just "return" or don't have a return statement return undefined
console.log(makeNoise());
// -> undefined

const power = function(base, exponent){
  let result = 1;
  for(let count = 0; count < exponent; count++){
    result *= base;
  }
  return result;
};

console.log(power(2, 10));

/* Bindings and Scope */

// Bindings declared with let and const are local to the block that they are declared in
let x = 10;
// noinspection ConstantIfStatementJS
if(true) {
  let y = 20;
  let z = 30;
  console.log(x + y + z);
}
try {
  // y is not visible here because it is local to the block above
  console.log(y);
}
catch(err) {
  console.log(err);
  // -> ReferenceError: y is not defined
}

// when the code inside the function refers to n, it is seeing its own n, not the global n
const halve = function(n){
  return n / 2;
};
let n = 10;
console.log(halve(100));
// -> 50
console.log(n);
// -> 10

/* Nested Scope */

const hummus = function(factor){
  const ingredient = function(amount, unit, name){
    // we can see `factor` from inside this nested function
    // but the local bindings like unit or ingredientAmount are not visible outside.
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1){
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "tablespoon", "cumin");
};
hummus(2);

/* Functions as Values */

let launchMissiles = function(){
  console.log("LAUNCHING MISSILES!!! TAKE COVER!!!");
};
safeMode = true;
if(safeMode){
  launchMissiles = function() {};
}

/* Declaration Notation */

console.log("The future says:", future());

function future(){
  return "Trump will get re-elected.";
}

/* Closures */

function multipliter(factor){
  return number => factor * number
}

const twice = multipliter(2);
console.log(twice(5));
// => 10

