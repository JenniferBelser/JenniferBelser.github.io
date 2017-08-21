// $('.button1').click(function(){
//  $('.image').css('background-image', 'url(images/wtfcat1.jpg)' );
//  $('.instacat').html('@nao_co5' );
// });

// $('.button2').click(function(){
//  $('.image').css('background-image', 'url(images/omgcat1.jpg)' )
//  $('.instacat').html('@rody.tino.tomoko' );
// });

// $('.button3').click(function(){
//  $('.image').css('background-image', 'url(images/sleepycat1.jpg)' )
//  $('.instacat').html('@cats.365' );
// });

// $('.button4').click(function(){
//  $('.image').css('background-image', 'url(images/lovecat2.jpg)' )
//  $('.instacat').html('@aarongramsey' );
// });


var baseUrl = "http://thecatapi.com/api/images/get?format=xml&results_per_page=1&category="


function getImage(category){

  $.get( baseUrl + category, function( data ) {

    // console.log(data);

    $(data).find("image").each(function () {
      var imgUrl = $(this).find("url").text();

      console.log(imgUrl);

      $('.image').css('background-image', 'url(' + imgUrl + ')');
    });  
  });
}


$('.buttons').click(function(){
 var audio = $('#catmeow')[0];
 audio.play();
});

   
$('.button1').click(function(){
  getImage('space');
});

$('.button2').click(function(){
  getImage('funny');
});

$('.button3').click(function(){
    getImage('sinks');
});

$('.button4').click(function(){
  getImage('caturday');
});




