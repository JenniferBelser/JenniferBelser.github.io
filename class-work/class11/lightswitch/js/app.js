$(document).ready(function () {

	var lights = 'on';

	$('#lightswitch').click(function(){
		$('#lightswitch').toggleClass('switch-off switch-on');
		$('body').toggleClass('lights-off');

		if (lights == 'on') {

			
			$('#lightswitch').text('OFF');

			lights = 'off';
		} else {

			$('#lightswitch').text('ON');

			lights = 'on';
			
		}

	});

})


// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;