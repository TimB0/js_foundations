// Hide a Page Element
$("#myElement").hide();

// The Before Method
$("#myElement").before("<h1>Hello</h1>");

// For a Click Event
// Handler:  A function that is passed into a jQuery method, such as click()
$("#myElement").click(function() {
	/** Code **/
});

// You can chain together Mehods
// Click Event THEN hide();
$("#myElement").click(function() {
	/** Code **/
}).hide();