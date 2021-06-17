function sum(a, b){
    console.log(a+b)
}
sum(1, 2);

var coffeeMachine = {
    makeCoffee : function(onFinish){
        console.log("Making coffee...")
        onFinish(2, 3)
    }
}
var beep = function(){
    console.log("beep...")
}

// beep()
coffeeMachine.makeCoffee(sum)

function sayHello() {
    console.log('I love Coders.Tokyo')
  }
  
  function countAndDo(callback) {
    for(var i=1; i<=10; i++){
      console.log(i)
    }
    callback()
  }
  countAndDo(sayHello)
  coffeeMachine.makeCoffee(function(){
      console.log("anonimous function")
  })