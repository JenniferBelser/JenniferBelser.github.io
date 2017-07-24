$('#submit').click(function(){
	var a = parseFloat($('#a').val());
	var b = parseFloat($('#b').val());

	console.log(a, b);

	if (a > b)  {
		$('#comparison').html('>');
	} else if (b > a) {
		$('#comparison').html('<');
	} else if (a == b) {
		$('#comparison').html('==');
	} else {
		$('#comparison').html('what are you doing?');
	}

});