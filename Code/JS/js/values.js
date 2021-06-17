var message = "in global";
console.log("global: message = " + message);

var a = function () {
  var message = "inside a";
  console.log("a: message = " + message);

  function b () {
    console.log("b: message = " + message); 
  }

  b();
}

// function b () {
//     console.log("b: message = " + message); 
// }

a();

// should be undefined
var x;
console.log(x);

if (x == undefined) {
  console.log("x is undefined");
}

x = 5;
if (x == undefined) {
  console.log("x is undefined");
}
else {
  console.log("x has been defined");
}

// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// lecture 43
// ***** String concatination
var string = "Hello";
// string += " World";
string = string + " World";
console.log(string + "!");




// ***** Regular math operators: +, -, *, /
console.log((5 + 4) / 3);
console.log(undefined / 5);
function test1 (a) {
  console.log( a / 5);
}
test1();




// ***** Equality 
var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
  console.log("x='4' is equal to y=4");
  // type coercion : converts something from one type to another type (same type as the other variable)

}


// Strict equality operator (===) differs from regular equality operator (==) in that it checks if both values on its right and left are of the same type first. 
// If they are not, it doesn't try to coerce them to be the same value and just returns false.
// ***** Strict equality
if (x === y) {
  console.log("Strict: x='4' is equal to y=4");
}
else {
  console.log("Strict: x='4' is NOT equal to y=4");
}






// ***** If statement (all false)
if ( false || null || 
     undefined || "" || 0 || NaN) {
  console.log("This line won't ever execute");
}
else {
  console.log ("All false");
}
// JavaScript provides these wrapper objects around the primitives
console.log(Boolean(""))

// ***** If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}


// ***** Best practice for {} style
// Curly brace on the same or next line...
// Is it just a style?
function a() 
{
  // it's undefined is because what a JavaScript engine does 
  // behind the scenes when you execute this code is it looks at the return statement, 
  // doesn't see anything after it, and places for you, a semi-colon right after it
  return
  { 
    name: "Yaakov"
  };
}

//  puts the opening curly brace on the same line as the function declaration, 
// and on the same line as the return statement
function b() {
  return { 
      name: "Yaakov"
  };
}

console.log(a());
console.log(b());


// For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);



// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// lecture 44: handing default values
// Default values
function orderChickenWith(sideDish) {
  // if (sideDish === undefined){
  //   sideDish = "whatever!";
  // }
  //  undefined right here gets coerced into a boolean and becomes false. So if it's false or this second statement will get evaluated. 
  // And the second statement, since it is a non-empty string, gets evaluated to true. And what the or statement does in this circumstance is actually returns the value before it was coerced. 
  // So what it actually returns to sideDish here is the string whatever!
  //  return whatever courses is to true first.
  sideDish = sideDish || "whatever!";
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

// null is false, so we continue
// console.log("Hello"), prints "Hello" to the console and returns nothing, so it's 'undefined' and 'undefined' is false, so we continue
// x > 5 is true, so we execute the body of the 'if' statement and print another "Hello". 
// So, the answer is that "Hello" will be printed to the console 2 times.
var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}