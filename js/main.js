$(document).ready(function() {
	$('#welcome-text').hide();
	$('#welcome-text').fadeIn(1000);
	$('#welcome-text a').click(function(event) {
		event.preventDefault();
		var href = $('#enter-link').attr('href');
		console.log(href);
		$('#welcome-text').fadeOut(1000, function() {
			window.location = href;
		});
		return false;
	});
});