// Javascript Numbers
//
// Comparisons



console.log("1 is less than 2 is " + (1 < 2));  // true
console.log("1 is greater than 2 is " + (1 > 2)); // false
console.log("1 is greater than or equal to 2 is " + (1 >= 2)); // false
console.log("1 is equal to 1 is " + (1 === 1)); // true
console.log("1 is equal to 1.5 is " + (1 === 1.5)); // false
console.log("1 is equal to 1.0 is " + (1 === 1.0)); // true
console.log("1 is greater than 1 is " + (1 > 1)); // false
console.log("1 is less than or equal to 1.0 is " + (1 <= 1.0)); // true
console.log("1 is equal to the string value of 1 when parsed is " + 
					(1 === parseInt("1", 10))); // true
console.log("1 is not equal to the string value of 1 when parsed is " + 
					(1 !== parseInt("1", 10))); // false
console.log("1 is not equal to 3 is " + (1 !== 3)); // true

if (1 < 2) {
	console.log("Yes");
} else {
	console.log("No");
}