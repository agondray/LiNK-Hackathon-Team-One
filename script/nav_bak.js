$(document).ready(function () {

	$('#login-form').slideUp('fast');

	$('#dropdown-login').click(function () {
		$('#login-form').slideToggle(400);
	});

})