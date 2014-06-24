/*/
	Function style guide
	for a modular way of thinking

	slider = {
		direction: {
			next: function(){
				console.log("next");
			},
			prev: function() {
				console.log("prev");
			}
		},
		swipe: {
			next: function() {
				console.log("swipe next");
			},
			prev: function() {
				console.log("swipe prev");
			}
		},
		init: {
			slider.direction.next();
			slider.direction.prev();
			slider.swipe.next();
			slider.swipe.prev();
		}
	}
/*/

$(function(){
	/*/
		Embed modules here
		this makes it easy to toggle 
		modules or update them or 
		debug to see which 
		that does not work 
	/*/
	//slider.init();
});

// Smart resize function
$(window).smartresize(function(){
	/*/
		This is a improved resize function 
		Embed modules that should be initated on resized
	/*/
});