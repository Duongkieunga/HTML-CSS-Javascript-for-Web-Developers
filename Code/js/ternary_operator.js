// Syntax : condition ? expression when true: expression when false

function tossCoin(){
    var value = Math.random();
    console.log(value <0.5 ? "true" : "false");
}
tossCoin()

// Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
function doSomething(a) {
    var b;
    if (a > 0) {
      b = 1;
    } else if (a < 0) {
      b = 2;
    } else {
      b = 3;
    }
    return b;
  }
  
  function doSomethingTernary(a) {
      return a > 0 ? 1 : (a<0?2 : 3)
  
  }
  