// JSON object
// 1. stringify : convert an object to a JSON string
// 2. parse - convert a JSON string to an object
var myDog = {name :"Milu", age :1, dead: false} // ngoac don o moi key
var myDogString = JSON.stringify(myDog) // ngoac kep o moi key
// chuyen object thanh string co the ghi vao file
var myCatString = '{"name":"Tom", "age":2, "dead":true}'
var myCat = JSON.parse(myCatString);
console.log(myDog, myDogString, typeof myDogString, myCat, myCat.name)

// hien thi tat ca hoc sinh
// tao mot hoc sinh ms
// luu va thoat. va ghi vao 1 file ./data.json
// ==, ===, ||, &&

// !x -> true voi x = NaN, 0, null, "", false
function isTruthy(x) {
    // your code here!
    if (!x ){
        // console.log(typeof x, x)
        return false
    }
    return true
  }
  isTruthy(NaN)
  isTruthy(0)
  isTruthy(null)
  isTruthy(false)
  isTruthy("")
  isTruthy([])
//   isTruthy(a)






