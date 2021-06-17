// An object is, again, a collection of name-value pairs
// Object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("Company CEO name is: " 
  + company.ceo.firstName);

//    I can't always use the dot notation, is because the dot notation will only work with whatever is a valid JavaScript identifier, or valid JavaScript, either function name, or valid JavaScript variable name.
console.log(company["name"]);
// dollar sign is something JavaScript variables, identifiers and function names are allowed to start with. 
company.$stock = 110;
// company.$stock of company = 110
var stockPropName = "stock of company";
company[stockPropName] = 110;

console.log("Stock price is: " + 
  company[stockPropName]);

// Better way: object literal
var facebook = {
  name: "Facebook",
  ceo: {
    firstName: "Mark",
    favColor: "blue"
  },
  "stock of company": 110
};

console.log(facebook.ceo.firstName);

// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// lecture 46 functions
// Functions are First-Class Data Types:
      // could do with the variable
      // whatever you could do with an object you could also do with the function.
      // could pass that around, assign it to a variable which as you've seen before, 
      // you could pass it as an argument to another function, 
      // you could return it as a return result from a function.
// Functions ARE objects:
//      They're regular objects that have some special properties to them

function multiply(x, y) {
    return x * y;
  }
  multiply.version = "v.1.0.0";
  console.log(multiply.version);
  console.log(multiply.toString());
  console.log(multiply);

  
  // Function factory
  function makeMultiplier(multiplier) {
    var myFunc = function (x) {
      return multiplier * x;
    };
  
    return myFunc;
  }
  
  var multiplyBy3 = makeMultiplier(3);
  console.log(multiplyBy3(10));
  var doubleAll = makeMultiplier(2);
  console.log(doubleAll(100));
  
  
  
  // Passing functions as arguments
  function doOperationOn(x, operation) {
    return operation(x);
  }
  
  var result = doOperationOn(5, multiplyBy3);
  console.log(result);
  result = doOperationOn(100, doubleAll);
  console.log(result);

  // --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// lecture 47: Passing Variables by Value vs. by Reference
// Copy by Reference vs by Value
//     Given b=a, passing/copying by value means changing copied value in b does "not affect" the value stored in a and visa versa.
//     Given b=a, passing/copying by refernce means changing copied value in b does "affect" the value stored in a and visa versa.
//     IN JS, primitives are passed by value  (copy by value), objects are passed by refernce(copy by reference)
// 

var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);



var a = { x: 7 };
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x update:");
console.log(a);
console.log(b);






// Pass by reference vs by value
function changePrimitive(primValue) {
  console.log("in changePrimitive...");
  console.log("before:");
  console.log(primValue);
  
  primValue = 5;
  console.log("after:");
  console.log(primValue);
}

var value = 7;
changePrimitive(value); // primValue = value
console.log("after changePrimitive, orig value:");
console.log(value);



function changeObject(objValue) {
  console.log("in changeObject...");
  console.log("before:");
  console.log(objValue);
  
  objValue.x = 5;
  console.log("after:");
  console.log(objValue);
}

value = { x: 7 };
changeObject(value); // objValue = value
console.log("after changeObject, orig value:");
console.log(value);


// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// lecture 48: Function Constructors, Prototype, and the 'this' Keyword
// execution context gets a special variable called "this".
// "this" is poiting to the global Window object(global object): parameters, properties
function test(){
  console.log(this);
  this.myName = "Nga"
}
test()
console.log(Window.myName)

// Function constructors: has capital Alphabet(it's basically just a convention to let other developers know that this is a function constructor as opposed to a regular function.)
// Func constructors: create new object must use it with the keyword new
function Circle (radius) {
  this.radius = radius;
  // every time created by "new" keyword, object Circle have getArea() method on every object --> dont need
  
  // this.getArea1 = function(){
  //   return Math.PI*Math.pow(this.radius, 2);
  // }

  // Circle.protutype.getArea is not something you should cut and put inside the func Circle, you could do that but that would be a mistake. bc func Circle.protutype.getArea is going to get executed every single time you create a new Circle. Every time, you don't need to define a prototype, you'll be overriding the memory space of getArea every single time you're creating a Circle.--> wasted memory space, since it's going to put in the same memory space
  
  // Circle.prototype.getArea = 
  // function () {
  //   return Math.PI * Math.pow(this.radius, 2);
  // };
}

// to be equal to our func
// only be created once and will not be created for every single instance of that object
Circle.prototype.getArea = 
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };

// when invoke a function with "new" keyword, the JS engine make "this" point to the object itself that fot created, which is the Cirle
// myCircle, "this" are object with a name Circle : Circle{}
// if you remove "new" keyword, myCircle is underfined bc Circle is nothing more than a function (regular JS func), regular JS func that you're passing 10 to and it actualy does not return anything --> undefined  
var myCircle = new Circle(10);
console.log(myCircle)
console.log(myCircle.getArea());
console.log(myCircle.getArea1())

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);

// myCircle, myOtherCircle: both of them are pointing to the same proto variable that have a getArea, this getArea is actually the same location in memory --> doesn't get receated over and over.




// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// lecture 49: Object Literals and the 'this' Keyword
// Object literals and "this" is refering to the literalCircle object
var literalCircle = {
  radius: 10,

  getArea: function () {
    // 'self' is always going to be referring to 'this'. At this point, is referring to the literalCircle object.
    var self = this;
    console.log(this);

    var increaseRadius = function () {
      
      // this.radius = 20
      self.radius = 20;
    };
    increaseRadius();
    // this.radius = 20 when use self.radius = 20; this.radius = 10 when use this.radius = 20
    // Bc: when you have an inner function within another func, this keyword srarts poiting to the global object (window.radius)  insted of on our loteralCircle object
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());
// ECMAScript 6
