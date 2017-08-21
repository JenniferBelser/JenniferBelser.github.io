$(document).ready(function () {

$(window).scroll(function (){
	console.log($(window).scrollTop())


	if ($(window).scrollTop() > 25) {
		$('header').addClass('small-header');
	} else {
		$('header').removeClass('small-header'); 
	}
});




})
