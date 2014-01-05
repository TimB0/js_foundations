// JavaScript Functions


var color = 'black'; // Global Scope
var number = 1; // Global Scope

function showColor() {
	var color = 'green'; // Functional Scope

	console.log('showColor color', color);
	console.log('showColor number', number); // Global Scope because 
											// it wasnt declared in the function
}

showColor(); // green - Functional

console.log('Global color', color); // black  - Global
console.log('Global number', number); // 1 - Global


function showNumber() {
	number = 2;  // Global Scope - without the var keyword, you are accessing
					// the global variable wihin a function

	color = 'purple'; // Global Scope
}

showNumber();


console.log(number); // 2
console.log(color); // purple

// Challenge Task

 var x = 1;
 var y = 1;

      function hypotenuse(a , b) {
        var cSquared = a * a + b * b;
        var x = Math.sqrt(cSquared);
        return x;
      }

      hypotenuse(x, y);




