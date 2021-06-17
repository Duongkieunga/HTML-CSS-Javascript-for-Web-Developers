// // var name and func sayHello are sitting in the global scope
// var name = "Yaakov"

// function sayHello(){
//     console.log("Hello " + name)
// }

// (function inside it)(to call function with parameters); 
(function (window) {
    // create empty object
    // yaakovGreeter is only living inside of this function 
    // how can we expose this yaakovGreeter to the window object
    var yaakovGreeter = {};
    yaakovGreeter.name = "Yaakov";
    
    var greeting = "Hello "; // part 2, priviate variable still use inside function, dont have to expose it to the outside
    yaakovGreeter.sayHello = function () {
      console.log(greeting + yaakovGreeter.name);
    }
    // creating a new property on the window object
    window.yaakovGreeter = yaakovGreeter;
  
  })(window);