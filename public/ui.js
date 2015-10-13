/**
 * ui.js
 *
 * Defines functionality for instrumenting the user-interface.
 *
 */

var librs = librs || {};
librs.ui = {};
librs.ui = function() {

	var toggle = function() {
		var e = document.getElementById('about');
		hasClass(e, 'show') ? removeClass(e, 'show') : addClass(e, 'show');
		console.log('About!');

	};

	var initialize = function() {

		console.log('Initialize!');

		// Grab the 'About' button element, identified by the
		// 'about-btn' id.
		var button = document.getElementById('about-btn');
		var submit = document.getElementById('submit-btn');

		// From this point forward, when the button is clicked, the
		// toggle function shall be invoked.
		submit.onclick = fetch;

	};

	var fetch = function() {
		var year = document.getElementById('year');
		var yearval = year.value;
		console.log(yearval);
		vizController(yearval);
	};
	// When this file is included at the bottom of the page,
	// the js is loaded after the DOM is loaded.  It is a
	// good time to initialize the UI elements in the page.
	initialize();
};
// end module
// Invoke module. After invocation, the module’s code is now added to
// the namespace and is accessible through the librs object.
librs.ui();
