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
		Get the browser version by using this variable: browserVersion

		Following will output browser version and vendor - this is great if you have something like a
		css calc function where its supported IE9+ & Safari6+ but you need to hit Safari5 and IE8
		then you can make an if when you embed the functions so you only run those in the browsers that needs them
		this will keep the performance in the browser that does support this kinda behavior:
	/*/
		var browserVersion = get_browser() + get_browser_version();
		console.log(get_browser());
		console.log(get_browser_version());
		console.log(browserVersion); 
	/*/
		if(get_browser() == "IE") {
			if(get_browser_version() < 9) {
				console.log("This is less than ie 9");
			}
		}
		if(browserVersion == Safari5) {
			console.log("Browser version: Safari5");
		}
	/*/

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