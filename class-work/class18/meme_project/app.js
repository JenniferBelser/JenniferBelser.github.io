// 78abfa128faf4ab3b4edf126d42c618a

// var xhrReddit = $.get("https://www.reddit.com/r/news/new/.json");

// xhrReddit.done(function(data){ 

// 	data.data.children.forEach(function(post){
// 		if(index < 5){
// 	var postTitle =post.data.children[0].data.title

// 	$('.headline').html(postTitle);
// 	postTitle = postTitle.split(' ');
// 	postTitle = postTitle.join ('+');


// 	var xhrGiphy = $.get("http://api.giphy.com/v1/gifs/search?q=" + postTitle +"&api_key=78abfa128faf4ab3b4edf126d42c618a&limit=5");
// 	xhrGiphy.done(function(data){ 
// 	var firstMp4 = data.data[0].images.original_mp4.mp4;

// 	$('.meme-wrap').append('<video src="'+ firstMp4 +'" type="video/mp4" autoplay loop></video>')	
// 	  });
// 	};
//   })
// });

// var xhrReddit = $.get("https://www.reddit.com/r/news/new/.json");

// xhrReddit.done(function(data) { 

// 	data.data.children.forEach(function(post, index){
// 		if (index < 5) {
// 			console.log(post.data.title);

// 			var postTitle = post.data.title;

// 			var postTitleNoPluses = post.data.title;

// 			postTitle = postTitle.split(' ');
			
// 			postTitle = postTitle.join('+');

// 			console.log(postTitle);

// 			var xhrGiphy = $.get("http://api.giphy.com/v1/gifs/search?q=" + postTitle +  "&api_key=78abfa128faf4ab3b4edf126d42c618a&limit=5");

// 			xhrGiphy.done(function(data) { 
// 				var firstMp4 = data.data[0].images.original_mp4.mp4; 
// 				$('.meme-wrap').append('<h1' + postTitleNoPluses + '</h1>');

// 				$('.meme-wrap').append('<video src="' + firstMp4 +  '" type="video/mp4" autoplay loop></video>')
// 			});
// 		}

// 	})
// });

var xhrReddit = $.get("https://www.reddit.com/r/news/new/.json");

xhrReddit.done(function(data) { 

	data.data.children.forEach(function(post, index){
		if (index < 5) {
			console.log(post.data.title);

			var postTitle = post.data.title;

			var postTitleNoPluses = post.data.title;

			// $('.headline').html(postTitle);

			postTitle = postTitle.split(' ');
			
			postTitle = postTitle.join('+');

			console.log(postTitle);

			var xhrGiphy = $.get("http://api.giphy.com/v1/gifs/random?q=" + postTitle +  "&api_key=78abfa128faf4ab3b4edf126d42c618a&limit=5");

			xhrGiphy.done(function(data) { 
				var firstMp4 = data.data.image_mp4_url; 

				$('.meme-wrap').append('<h1>' + postTitleNoPluses + '</h1>');

				$('.meme-wrap').append('<video src="' + firstMp4 +  '" type="video/mp4" autoplay loop></video>')
			});
		}

	})
});