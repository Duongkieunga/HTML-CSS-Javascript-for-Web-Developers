/**
 JavaScript provides 3 ways to compare values:

1. strict equality operator === (equal value)
2. The loose equality operator == (equal value and equal type)
3. Object.is() function
 */
var s=[1,2,3];
var q=[1,2,3];
var p = s;
console.log(s === q);
console.log(s == q);
console.log(s == p);
console.log(s === p);