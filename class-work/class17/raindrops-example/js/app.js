var dropFrequency = 0;

jQuery('#raindrops-1').raindrops(
{color:'purple',
density: 0.1,
frequency:dropFrequency});


$('#raindrops-1').click(function(){
	jQuery('#raindrops-1').raindrops(
	{frequency:dropFrequency});
	dropFrequency = dropFrequency+10;
});