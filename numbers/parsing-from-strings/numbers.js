// It is best practice to always pass the radix argument with the string
// you want to convert.

var n = parseInt("019", 10); // 19 - passing the base10 argument (radix)

var o = parseInt("19", 10); // 19

var p = parseInt("010111", 2); // 23 - passing the base2 argument (radix)

var q = parseInt("010111", 8); // 4169 - passing the octal argument (radix)

var r = parseInt("23 People", 10); // 23

var s = parseInt("there are 23 People", 10); // NaN:  Not A Number

var t = s + 14; // NaN

console.log(s === NaN); // false, because NaN is not equal to itself

// If you want to test if a string is NaN, use this:
console.log(isNaN(s)); // true

var u = parseFloat("123.456"); // 123.456

var v = parseFloat("123.456 is a strange number"); // 123.456

var w = parseFloat("this number:  123.456 is a strange number"); // NaN

var x = parseFloat("0123.456 is a strange number"); // 123.456

 var boxWidth = "640px";
 var numWidth = parseInt(boxWidth, 10); // 640

 


