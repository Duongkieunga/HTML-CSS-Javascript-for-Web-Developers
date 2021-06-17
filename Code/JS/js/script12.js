// // name = "Yaakov" gets overwritten with name = "John" bc script11.js be declares before script12.js
// var name = "John"
// function sayHi(){
//     console.log("Hi " + name)
// }

(function (window) {
    // 
    var johnGreeter = {};
    johnGreeter.name = "John";
    var greeting = "Hi "; // part 2
    johnGreeter.sayHi = function () {
      console.log(greeting + johnGreeter.name);
    }
  
    window.johnGreeter =  johnGreeter;
  
  })(window);
  