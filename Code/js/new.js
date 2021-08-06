// tao object moi
var today = new Date()
// console.log(today)

// Create a new object, object literal
var mouse = {
    weight :0.2,
    getWeight : function(){
        return this.weight
    }
}

// constructor function
// tat ca cac function trong js deu goi neu duoc
function Mouse(){
    this.type = 'mouse';
    this.color = "color"
}

var mouse1 = new Mouse();
console.log(mouse1.type)

console.log({type:'mouse'})
console.log(mouse1.color)
mouse1.color ='white'
console.log(mouse1.color)

var tom = {
    name:"Tom",
    stomach:[],
    eat: function(mouse){
        this.stomach.push(mouse)
        return this
    }
}
var m1 = {name : "m1"}
var m2 = {name : "m2"}
var m3 = {name : "m3"}
tom.eat(m1).eat(m2).eat(m3)
console.log(tom)
delete m1.name // m1['name']
console.log(m1)

var student = {
          name: "Jerry", 
          age: 14,
          role: "student"
    }
console.log(Object.keys(student))