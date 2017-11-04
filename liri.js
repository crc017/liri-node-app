
var Twitter = require('twitter');
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
//var spotifyKeys = require('./keys.js');

var client = new Twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys.access_token_secret,
});
console.log ("consumer key is: " + keys.consumer_key);

var spotify = new Spotify({
  id: keys.id,
  secret: keys.secret,
});


var input = process.argv[2];




//twitter call
if(input === "my-tweets"){
	client.get('statuses/user_timeline', {user_id: '924799040184881153', count: 20, trim_user: true}, function(error, tweets, response) {
	 for(i = 0; i < tweets.length; i++ ){ 
	  	if(error) throw error;
	  	console.log('\nTweet#' + (i+1) + ':  ' + tweets[i].text + '' + '\nCreated On: ' + tweets[i].created_at); 
	 };

	})
};


var searchArray = '';
	
	for(i=3; i < process.argv.length; i++){
		searchArray.concat(process.argv[i]);
	};


console.log(searchArray);


//Spotify-this-Song 
if(input === "spotify-this-song"){

		spotify.search({ type: 'track', query: process.argv[3], limit: 1 }, function(err, data) {
  			if (err) {

    			return console.log('Error occurred: ' + err);
    			spotify.search({ type: 'track', query: "Ace of Base", limit: 3 }, function(data) {

 	
			console.log('\nArtist: ' + data.tracks.items[0].artists[0].name + '\nSong: ' + data.tracks.items[0].name + '\nLink: ' + data.tracks.items[0].external_urls.spotify + '\nAlbum: ' + data.tracks.items[0].album.name);
				}) 			
  			}
 
			console.log('\nArtist: ' + data.tracks.items[0].artists[0].name + '\nSong: ' + data.tracks.items[0].name + '\nLink: ' + data.tracks.items[0].external_urls.spotify + '\nAlbum: ' + data.tracks.items[0].album.name);		

		});
	
};
//GET https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2

