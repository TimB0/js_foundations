// Javascript Objects

// Basics

var jim = { 
	name: "Jim", 
	skills: ["JavaScript", "Ruby", "Dancing"],
	"favorite color": "green"  // spaces need quotation marks
};

console.log(jim.name); // Jim
jim.name = "James";
console.log(jim.name); // James
console.log(jim.skills);  // ["JavaScript", "Ruby", "Dancing"]
jim.skills = "Everything";
console.log(jim.skills); // Everything

console.log(jim["favorite color"]); // green
console.log(jim["name"]);  // not necessary for name but possible

jim["name"] = "Timothy" 

jim["favorite color"] = "blue";

console.log(jim["favorite color"]); // blue

console.log(jim.name); // Timothy


