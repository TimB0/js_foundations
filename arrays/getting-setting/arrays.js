// JavaScript Arrays

// Getting and Setting


var my_array = ["Hello", 42, true, function (a) {return a * 2}];

var word = my_array[0];

var answer = my_array[1];

var doubler = my_array[3];
console.log(doubler(10));


// Setting

my_array[1] = 144;
var new_answer = my_array[1];  // keep in mind the previous 'answer' 
							  // variable is unchanged, it still equals 42

my_array[4] = "A new String";

my_array[14] = "A new String";

my_array[my_array.length] = "A new String";
my_array[my_array.length] = "A new String";
my_array[my_array.length] = "A new String";

my_array[answer] = "A new String";



var quizArray = ["sugar", "rush", "fix", "it", 3.14, 42];
var thirdElementInArray = quizArray[2];
my_array[30] = 'treehouse';