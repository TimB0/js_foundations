// Javascript Functions

function sayHello () {
	console.log("Hello World!");
}

sayHello();


function sayHello (name) {
	console.log("Hello World!", name);
}

sayHello("Tim");

function sayHello (name, greeting) {
	console.log(greeting, " World!", name);
}

sayHello("Tim");

function sayHello (name, greeting) {
	console.log(greeting + " World! " + name);
}

sayHello("Tim", "Hello");


function sayHello (name, greeting) {
	if (typeof greeting === 'undefined') {
		greeting = 'Hello';
	}
	console.log(greeting + " World! " + name);
}

sayHello("Tim", "Greetings");

sayHello("Tim");
