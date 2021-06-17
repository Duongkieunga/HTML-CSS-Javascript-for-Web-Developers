// Arrays: collecting of data, properties
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
// array[2](); undefined
array[2](array[0]);
console.log(array[3].course);


// Short hand array creation
console.log([
    {name: "Nga"},
    {name: "Duong"},
    "Kieu"
]);
var names = ["Yaakov", "John", "Joe"];
console.log(names);

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

names[100] = "Jim";
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

var names2 = ["Yaakov", "John", "Joe"];

var myObj = {
  name: "Yaakov",
  course: "HTML/CSS/JS",
  platform: "Courera"
};

// property in my object, object don't have indices like arrays does, it has properties
for (var prop in myObj) {
  console.log(prop + ": " + myObj[prop]);
}

for (var name in names2) {
  console.log("Hello " + names2[name]);
}

// array is object, .geeting is property of the array no diffent than a number zero, or number two, and so on (index)
names2.greeting = "Hi!";

for (var name in names2) {
  console.log("Hello " + names2[name]);
}