// JavaScript Objects

// ProtoTypes

var personPrototype = {
	name: 'Anonymous',
	greet:  function (name, mood) {
		name = name || "You";  // if no name use "You"
		mood = mood || "good";  //  if no mood use "good"

		console.log("Hello, " + name +
					" I am " + this.name +
					" and I am in a " + mood + " mood!");
	},

	species: 'Homo Sapien'
};

function Person (name) {  // Capitalize Constructor functions
	this.name = name;  
	// this always gets returned
}

Person.prototype = personPrototype;

jim = new Person("Jim"); // new will bind to 'this'
nick = new Person("Nick");

////////////////////////////////////////////////////////////

nick.species = 'Human';
console.log(nick.species); // Human
console.log(jim.species); // Homo Sapien

Person.prototype.species = 'Human';

console.log(nick.species); // Human
console.log(jim.species); // Human

Person.prototype.favoriteColor = 'Red';

console.log(nick.favoriteColor); // Red
console.log(jim.favoriteColor); // Red

jim.favoriteColor = 'Green';

console.log(nick.favoriteColor); // Red
console.log(jim.favoriteColor); // Green


///////////////////////////////////////////////

// Challenge





