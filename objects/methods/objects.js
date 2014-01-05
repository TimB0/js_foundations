// Javascript Objects

// Methods

var jim = { 
	name: "Jim", 
	skills: ["JavaScript", "Ruby", "Dancing"],
	"favorite color": "green",  // spaces need quotation marks
	greet: function(){
		console.log("Hello, I am " + this.name);
		}
};

var nick = { 
	name: "Nick", 
	greet: jim.greet
};

jim.name = "James";

jim.greet();

jim["greet"]();

nick.greet();

// GOTCHA //////////
// var jimGreet = jim.greet;
// jimGreet(); // Hello, I am ____  - context is lost, no longer knows what 'this' is

// function whatIsThis() {
// 	console.log(this);
// }

// whatIsThis(); // Window...which is the Global object when no other context is given.

////////////////


