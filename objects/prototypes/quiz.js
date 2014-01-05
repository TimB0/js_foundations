// Javascript Prototypes
//
// Quiz Questions

// What value would be displayed in the console for this code? 
var person = {
  name: "Mike",
  skills: ["html", "css"]
}

person.name = "Bob";

console.log(person["name"]);

//What are the values of mittens.name and mittens.legs after this code 
// executes? 

function Cat (name) {
  this.name = name;
  this.ears = 2;
}

var mittens = new Cat("Sir Mittens");

Cat.prototype.legs = 4;

console.log(mittens.name);
console.log(mittens.legs);