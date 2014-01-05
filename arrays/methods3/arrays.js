// JavaScript Arrays
//
// Methods Part III


// Safe Methods that will create new versions of your Arrays

//  Join 2 arrays together and return a new array
// var x = [1, 2, 3];
// var y = [4, 5, 6];
// var z = x.concat(y);
// // var z = x.concat(4, 5, 6, 7, 8, 9);
// // var z = x.concat(4, 5, 6, 7, 8, 9, [10, 11, 12]);

// console.log(x);
// console.log(y);
// console.log(z);


// Slice
var my_array = [0, 1, 2, 3, 4, 5];

var resultA = my_array.slice(1, 4);
console.log(resultA); // 1, 2, 3

var resultB = my_array.slice(2, 4);
console.log(resultB); // 2, 3

var resultC = my_array.slice(2, 5);
console.log(resultC); // 2, 3, 4

var resultD = my_array.slice(2, 6);
console.log(resultD); // 2, 3, 4, 5

var resultE = my_array.slice(2, 60); // Wont return any extra values
console.log(resultE); // 2, 3, 4, 5


// Join
var words = ["these", "are", "some", "words"];
var resultA = words.join(' '); 
var resultB = words.join('-'); 
var resultC = words.join('TREEHOUSE'); 
var resultD = words.join(); 

var wordsA = ["these", "are", "some", "words", true];
var resultE = wordsA.join(' ');  // converts true to a string

var wordsB = ["these", "are", "some", "words", 123.4];
var resultF = wordsB.join(' ');  // converts 123.4 to a string

var wordsC = ["these", "are", "some", "words", function(a) {return a}];
var resultG = wordsB.join(' ');  // converts function(a) {return a} to a string


// Quiz
 	var first =  ["The", "quick", "brown", "fox", "jumps"]
      var second =  ["over", "the", "lazy"];
      var saying = first.concat(second, "dog"); 
      var shortSaying = saying.slice(1, 4);
      console.log(shortSaying);
      var sayingString = saying.join(' ');
      console.log(sayingString);


