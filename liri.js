
require("dotenv").config();
//initiate spotify API
//require spotify API
var SpotifyWebApi = require('spotify-web-api-node');
//spotify ID and info
var spotifyApi = new SpotifyWebApi({
  clientId: 'da40305d6bf84ba9997d3887b394eae4',
  clientSecret: 'a0b86b8dcc4845cf8045db637519f751',
 redirectUri: 'http://www.example.com/callback'
});
// Include the request npm package for OMDB (Don't forget to run "npm install request" in this folder first!)
var request = require("request");
//reuire bandsintown API
//var bandsintown = require('bandsintown')(APP_ID);

//link to keys.js
var keys = require("keys.js");
//variable for spotify keys
//var spotify = new Spotify(keys.spotify);
//grab command line argument
var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

//NEED TO NPM INSTALL .ENV FILE (not working)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//print if searching spotify
if (search === "spotify") {
  console.log("Searching Spotify for song: " + term);

  //spotify search from site, added term variable for query
  spotifyApi.searchTracks(term)
  .then(function(data) {
    console.log('Search by: ' + term, data.body);
  }, function(err) {
    console.error(err);
  });
}


//print if searching bands in town
if (search === "concert") {
  console.log("Searching for band in town: " + term);
  //create bands constructor NOT SURE IF THIS WORKS
  var BANDS = function() {
    //findBand takes in name of band and searches bands in town API
    this.findBand =function(band) {
    
      var URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=653b62a76c013cf37ddb69e12b666503";
      // parse body (string) to a JSON object
      var jsonData = JSON.parse(body);

      //bandData is string containing band data that will print to console
      //Need to look at API results to get correct info
      var bandData = [

      ].join("\n\n");
    }
    console.log(bandData);
  }
}

//print if searching OMDb
if (search === "movie") {
  console.log("Searching for movie: " + term);
  // Then run a request to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";

  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);

  request(queryUrl, function (error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("Release Year: " + JSON.parse(body).Year, "\nIMDB Rating: " + JSON.parse(body).Rated, "\nPlot: " + JSON.parse(body).Plot );
    }
  });
}
