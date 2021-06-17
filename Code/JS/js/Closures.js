// Closures: without this concept implemented in JavaScript something like Ajax wouldn't really even be possible
function makeMultiplier (multiplier) {
    // var multiplier = 2;
    function b() {
      console.log("Multiplier is: " + multiplier);
    }
    b();
  
  
    return (
        function (x) {
          return multiplier * x;
        }
  
      );
  }
  
  var doubleAll = makeMultiplier(2);
  console.log(doubleAll(10)); // its own exec env