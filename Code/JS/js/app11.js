// // name has changed from Yaakov to John
// sayHello()
// sayHi()

// --> use namespace: basically just a container for some functionality and for some declarations.
// in JS can fake name spaces 
yaakovGreeter.sayHello();
johnGreeter.sayHi();

// Immediately Invoked Function Expression
// IIFE
(function (name) {
  console.log("Hello " + name);
})("Coursera!");

