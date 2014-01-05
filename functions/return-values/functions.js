// Javascript Functions

function sayHello (name, greeting) {
	if (typeof greeting === 'undefined') {
		greeting = 'Hello';
	}
	console.log(greeting + " World! " + name);

	return "Done";
}

sayHello("Tim", "Greetings");
sayHello("Tim");


function sayHello (name, greeting) {
	if (typeof greeting === 'undefined') {
		greeting = 'Hello';
	}
	console.log(greeting + " World! " + name);

	return name.length;
}

console.log(sayHello("Tim", "Greetings"));

console.log(sayHello("James", "Greetings"));


// Any code AFTER a Return statement will NOT be executed
function sayHello (name, greeting) {
	if (typeof greeting === 'undefined') {
		greeting = 'Hello';
	}
	console.log(greeting + " World! " + name);

	return name.length;
	console.log('End Of Function');
}


function sayHello (name, greeting) {
	if (typeof name === 'undefined') {
		return 0;
	}
	if (typeof greeting === 'undefined') {
		greeting = 'Hello';
	}
	console.log(greeting + " World! " + name);

	return name.length;
	console.log('End Of Function');
}

console.log(sayHello("Tim", "Greetings"));
console.log(sayHello("James", "Greetings"));
console.log(sayHello());

// Challenge
// Create a function named 'arrayCounter' that takes in a parameter which is an array. 
// The function must return the length of an array passed in or 0 if a 'string', 'number' or 
// 'undefined' value is passed in.

function arrayCounter(someArray) {
	if ( someArray instanceof Array ) {
		return someArray.length;
	}
	if ( typeof someArray === "string" || 
		 typeof someArray === "number" ||
		 typeof someArray === "undefined") {

		return 0;
	}
}

var first =  ["The", "quick", "brown", "fox", "jumps"];
console.log(first.length);

arrayCounter(first);
