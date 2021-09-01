var wrapper = document.getElementById('modal-wrapper'),
scroller = document.getElementById('modal-scroller'),
container = document.getElementById('modal-scroller_container');
function dontStartSelect() {
	return false;
}

function selection(on) {
	if (on) {
		$(document).on('selectstart', dontStartSelect);
	} else {
		$(document).off('selectstart', dontStartSelect);
	}
}

event(bar, 'mousedown', function(e) {
	e.preventDefault();
	selection(false); // Disable text selection in IE8
});

event(document, 'mouseup blur', function() {
	selection(true); // Enable text selection in IE8
});