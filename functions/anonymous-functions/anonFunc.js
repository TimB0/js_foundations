// Javascript Functions
//
// Anonymous Functions

// Named Function
function myFunction() {

}

myFunction();


// Anonymous Functions Assigned To Variable Names
// var myFunction = function () {
// 	console.log('myFunction was called')
// };
// myFunction();

// Can also work without the assiging a variable name
// function myFunction () {
// 	console.log('myFunction was called')
// };
// myFunction();	

var callTwice = function (targetFunction) {
	targetFunction();
	targetFunction();
};

// callTwice(myFunction);  // Parantheses Not needed here


// named functions make debugging easier
// var myFunction = function () {
// 	console.log('myFunction was called')
// 	undeclaredVariable;
// };
// myFunction();	


callTwice(function () {
	console.log("Hello From Anon Function");
});



function tempFunction () {
	var a, b, c;
}

tempFunction();


// You will see this in alot of javascript libraries - cause you dont have to workry
// about affecting the Global variables or variables used by other libraries/scripts

// Self Executing Anonymous Function
(function () {
	var a, b, c;
	// ...

	console.log('from anon functions')
})(1, "hello")
// The parentheses make it automatically evaluate and run itself
