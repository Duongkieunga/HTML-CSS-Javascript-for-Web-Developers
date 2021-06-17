/**
 * switch(expression){
 * case value1: do something; break;
 * default : do something; break;
 * }
 */
var numberCard = {
    tier : 'silver'
};

function getTotal(price, card){
    var discountRate;
    switch(card){
        case 'silve':
            discountRate=0.05;
            break;
        case 'gold':
            discountRate = 0.08;
            break;
        default:
            discountRate = 0;
            break;
    }
    return price*(1-discountRate)
}
// console.log(getTotal(500000, 'silve'))

function transform(arr) {
    // your code here
    for(var i = 0; i<arr.length; i++){
        switch(arr[i]){
          case 'A':
            arr[i] = 1;
            break;
            case 'a':
                arr[i] = 1;
                break;
          case 'B' :
            arr[i] = 2;
              break;
          
          default:
            arr[i] = 0;
              break;
        }
    }
    return arr;
  }
//   console.log(transform([1, 2, 'a']))
function sum(x) {
    // viết code ở đây.
    var res = 0, i = x-1;
    while(i>0 && i<x){
        if(i%2){
            res+=i;
        }
        i-=1;
    }
    return res;
  } 
console.log(sum(5))  