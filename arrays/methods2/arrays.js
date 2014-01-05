// Javascript Arrays

// Methods Part II

// Sorting

var my_array = [10, 44, 32, 10, 100, 0, 44, 3, 4];
console.log(my_array.toString());

my_array.sort(); // By default This method sorts alphabetically not numerically
console.log(my_array.toString());

// To make it sort numerically:
my_array.sort(function (a, b) {
	return a - b;
});
console.log(my_array.toString());

// To Randomly Sort the Array
my_array.sort(function (a, b) {
	return Math.random() - 0.5;
});
console.log(my_array.toString());

// Reverse

var my_array = [1, 2, 3, 4, 5];
console.log(my_array.toString());

my_array.reverse();
console.log(my_array.toString());

// Quiz

// modify 'saying1' so it's in the opposite order

// Sort the 'saying2' array, so that the words are listed in length order. The shortest first. Use the 'length' property on the strings 
// in the sort function.

var saying1 = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
var saying2 = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog's", "back"];
saying1.reverse();
saying2.sort(function (a, b) {
	return a.length - b.length;
});
console.log(saying2.toString());

