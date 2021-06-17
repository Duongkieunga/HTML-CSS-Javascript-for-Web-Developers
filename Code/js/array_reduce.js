// giam 1 array thanh 1 gia tri khong lien quan den gia tri cua mang. 
var numbers = [1, 2, 3, 4]
numbers.reduce(function(a, b){
    return a+b
})


var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
  ];
  
  function totalVotes(arr) {
    // write code here...
    var array =  arr.reduce(function(a, b){
        // console.log(Number(a.voted), Number(b.voted))
        a.voted=  Number(a.voted)+Number(b.voted)
        return a
    })
    return array.voted
  }
//   console.log(totalVotes(voters))



var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
  ];
var init = { title: "Google", price: 1 }
wishlist.reduce(function(a, b){
  // console.log(a, b)
  a.price += b.price
  return a
}, init)
init['l']=0
// console.log(init['l'])

function countOccurrences(arr) {
  // viết code ở đây.
  return arr.reduce(function(a, b){
      if(typeof a[b] === 'undefined'){
          a[b] = 1
          
      }
      else{
          a[b]+=1
      }
      return a
  },{})
}
console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']))
