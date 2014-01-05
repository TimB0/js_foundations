// Javascript Functions

// Examples

var button = document.getElementById('action');
var input = document.getElementById('text_field');

button.onclick = function () {
	console.log('clicked'); // ignored becasued onclick can only hold one
							// value
}

button.onclick = function () {
	console.log('Other click listener');
	input.setAttribute('value', 'Hello World');
}

//This technique dosent work in IE8 or earlier, but is preferred over onclick.
button.addEventListener('click', function () {
	console.log('Add Event Listener Clicked');
	input.setAttribute('value', 'Hello World');
});


function example (a, b) {
  console.log("a === ", a,  " , b === ", b);
}

example("Treehouse");

console.log(return;);