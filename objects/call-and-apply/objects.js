// Javascript Objects

// Call and Apply

var jim = { 
	name: "Jim", 
	skills: ["JavaScript", "Ruby", "Dancing"],
	"favorite color": "green",  // spaces need quotation marks
	// greet: function(){
	// 	console.log("Hello, I am " + this.name);
	// 	}
	greet:  function (name, mood) {
		name = name || "You";  // if no name use "You"
		mood = mood || "good";  //  if no mood use "good"

		console.log("Hello, " + name +
					" I am " + this.name +
					" and I am in a " + mood + " mood!");
	}
};

var nick = { 
	name: "Nick", 
	greet: jim.greet
};

jim.name = "James";

jim.greet();

jim["greet"]("Ryan", "awesome");

nick.greet();

// This is a GOTCHA //////////
// But we can use Call which can be used on EVERY function//////
var jimGreet = jim.greet;
jimGreet(); // Hello, I am ____  - context is lost, no longer knows what 'this' is

jimGreet.call(jim); // will literally call jimGreet with the proper 
				  // context by passing a parameter to "this"

jimGreet.call(nick); // Hello, I am Nick
jimGreet.call();  // Hello, I am _______
jimGreet.call({ name: "Amit"}); // Hello, I am Amit
jimGreet.call({ name: "Amit"}, "Matt", "bad"); // Hello, I am Amit
jim.greet.call(nick); // Since call is built into the greet function, we can do this.


// Apply
jim.greet.apply(nick);

jim.greet.apply(nick, ["Matt", "bad"]); //(context, [Array of arguments])

var args = ["Michael", "happy"];
jim.greet.apply(jim, args);
				

////////////////


// Challenge
// Set the 'greeting' variable, on line 29, by using the 'genericGreet' function 
// in the context of 'andrew' with the array of arguments, 'args1'.

   var genericGreet = function(name, mood) {
        name = name || "you";
        mood = mood || "good";
        return "Hello " + name + ", my name is " + this.name +
          " and I am in a " + mood + " mood!";
      }
      
      var andrew = {
        name: "Andrew"
      }
      
      var args1 = ["Michael", "awesome", ":)"];

      var greeting = genericGreet.apply(andrew, args1);

      


