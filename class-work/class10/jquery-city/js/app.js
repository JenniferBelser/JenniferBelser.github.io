// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// $('#first').click(function(){
// 	var thumbSrc = $('#first').attr('src');
// 	$('#big-image').attr('src', thumbSrc)
// });

// $('#second').click(function(){
// 	var thumbSrc = $('#second').attr('src');
// 	$('#big-image').attr('src', thumbSrc)
// });

// $('#third').click(function(){
// 	var thumbSrc = $('#third').attr('src');
// 	$('#big-image').attr('src', thumbSrc)
// });

// $('#fourth').click(function(){
// 	var thumbSrc = $('#fourth').attr('src');
// 	$('#big-image').attr('src', thumbSrc)
// });

$('.thumb').click(function(){
	var thumbSrc = $(this).attr('src');

	$('#big-image').attr('src', thumbSrc);
	$('.thumb').css('border', 'none');
	$(this).prev().css('border', '1px solid red');
});