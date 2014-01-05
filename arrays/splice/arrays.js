// Using Delete
var my_array = [0, 1, 2, 3, 4, 5, 6];
console.log(my_array.toString());

delete my_array[2];

console.log(my_array.toString());


// Using Splice - Removing From the Array
var my_array = [0, 1, 2, 3, 4, 5, 6];
console.log(my_array.toString());
my_array.splice(2, 1);
console.log(my_array.toString());

var my_array = [0, 1, 2, 3, 4, 5, 6];
console.log(my_array.toString());
my_array.splice(2, 2);
console.log(my_array.toString());

var my_array = [0, 1, 2, 3, 4, 5, 6];
console.log(my_array.toString());
my_array.splice(4, 1);
console.log(my_array.toString());

// Using Splice - Adding to the Array
var my_array = [0, 1, 2, 3, 4, 5, 6];
console.log(my_array.toString());
my_array.splice(2, 0, 'two');
console.log(my_array.toString());

// Using Splice to Replace an element in the Array
var my_array = [0, 1, 2, 3, 4, 5, 6];
console.log(my_array.toString());
my_array.splice(2, 1, 'two');
console.log(my_array.toString());

// This is a much more convienent method to Replace an element
var my_array = [0, 1, 2, 3, 4, 5, 6];
console.log(my_array.toString());
my_array[2] = 'two';
console.log(my_array.toString());


// But Splice is good for entering many elements at once
var my_array = [0, 1, 2, 3, 4, 5, 6];
console.log(my_array.toString());
my_array.splice(2, 1, 'two', 'TWO', 'something else');
console.log(my_array.toString());

// Or removing many and inserting many in its place at once
var my_array = [0, 1, 2, 3, 4, 5, 6];
console.log(my_array.toString());
my_array.splice(2, 3, 'two', 'TWO', 'something else');
console.log(my_array.toString());


// Challenge
 var saying = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
 console.log(saying.toString());
 saying.splice(1, 2, "slow", "red");
 console.log(saying.toString());