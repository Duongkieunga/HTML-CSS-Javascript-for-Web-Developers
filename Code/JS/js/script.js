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