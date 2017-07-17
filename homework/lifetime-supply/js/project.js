var calculation = 0;


$('#click-me').click(function(){
	calculation = $('#max-age').val() - $('#age').val();
	calculation = calculation * 365;
	calculation = calculation * $('#num-per-day').val();

	$('#solution').text(calculation);

	var item = $('#item').val();

	$('#drink').html(item);

});