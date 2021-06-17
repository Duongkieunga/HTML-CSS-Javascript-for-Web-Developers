// syntax: array.sort(function(a, b){})
// if sort function
// return a value <0. a will come before b
// return a>0. a wil come after b
// return 0. a and b will stay unchanged
var numbers = [1, 3, -3]
// ascending order
var escendingNumbers = numbers.sort(function(a, b){
    return a-b;
})
console.log(escendingNumbers)

var employees = [
    {name : "a", age:19},
    {name :"b", age:20},
    {name:"c", age :1}
]
console.log(employees.sort(function(a, b){
    return a.age - b.age
}))

var str = ["1","a","-s"]
console.log(str.sort(), str.slice(1, 2))