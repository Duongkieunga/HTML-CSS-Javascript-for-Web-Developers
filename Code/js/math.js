console.log(Math.PI, Math.ceil(4.5), Math.floor(0.4), Math.round(4.5), Math.max(1, 2, -4, 5), Math.min(-3, 8 -9), Math.random())
var s = [1, 2, 3]
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
  ];
  
  function shoppingSpree(wishlist) {
    // Write code here...
    var array = wishlist.reduce(function(x, y){
        // console.log(x.price, y)
        x.price += y.price
        return x
    })
    return array.price
  }
  console.log(shoppingSpree(wishlist))
  var s = 1
  var l = [2, s]
 l.sort(function(a, b){
     return a-b
 })
 console.log(l)