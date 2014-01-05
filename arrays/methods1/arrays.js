// JavaScript Arrays

// Methods

// Push and Pop

// var my_array = [2, 3, 4];
// console.log(my_array.toString());

// my_array.push(5); // adds an element to the end of the array
// console.log(my_array.toString());

// var value = my_array.pop(); // removes and returns the last element of the array
// console.log(my_array.toString()); // 2,3,4
// console.log(value) // 5

// var value2 = my_array.pop(); // removes and returns the last element of the array
// console.log(my_array.toString()); // 2,3
// console.log(value2) // 4


// Unshift and Shift
var my_array = [2,3,4]
console.log(my_array.toString()); // 2,3,4

my_array.unshift(1);  // adds an element to the beginning of the array
console.log(my_array.toString()); // 1,2,3,4

var value = my_array.shift();  // removes and returns the first element of the array
console.log(my_array.toString()); // 2,3,4
console.log(value); // 1


// Quiz

var spareWords = ["The","chimney","sweep's","dog"];
var saying = ["quick", "brown", "fox", "jumps", "over", "the", "lazy"];
var firstWord = spareWords.shift(); // The
var lastWord = spareWords.pop(); // dog

saying.unshift(firstWord);
saying.push(lastWord);