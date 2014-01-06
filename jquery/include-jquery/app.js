// Examples

// Refer to the pricing.html page in the smellslikebakin project to see this in action

// Add Jquery to the Project
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript">

// Hide an order_form element and put an Order Now button BEFORE it (or, in its place)
$(".order_form").hide().before("<a href='#' class='order_now'>Order Now</a>");

// Add a Click Handler to the Order Now button, that will display order_form when order_now is clicked
$(".order_now").click(function(){
			var $link = $(this);  // this is the order_now button
			$link.next().show("slow"); // next is the order_form, since we placed the order_now button BEFORE the order_form
									  // show(slow) will display the order_form slowly
			link.remove();  // will remove the link after the order form is displayed
		 // prev.remove(); // you can also use this to remove the link, since it was the element PREVIOUS to the order_form
			return false; // will stop the browser from anchoring to the top (#) after the link is clicked
		});		


/* What we learned how to do:

 - Manipulate Content - hide(), show(), 
 - Add New HTML on the fly - before()
 - Traverse the Document - next(), prev()
 - Added a Click Handler to reveal the content - click(function() {})


