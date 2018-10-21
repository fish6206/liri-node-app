
require("dotenv").config();

//link to keys.js
var keys = require("keys.js");
//variable for spotify keys
var spotify = new Spotify(keys.spotify);
//grab command line argument
var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

//NEED TO NPM INSTALL .ENV FILE (not working)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//print if searching spotify
if (search === "spotify") {
  console.log("Searching Spotify for song");
  spotify.findSong(term);

  //spotify search from site, added term variable for query
  spotify.search({ type: 'track', query: term }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log(data);
  });
}

//print if searching bands in town
if (search === "concert") {
  console.log("Searching for band in town");
  //create bands constructor NOT SURE IF THIS WORKS
  var BANDS = function() {
    //findBand takes in name of band and searches bands in town API
    this.findBand =function(band) {
      //IS BAND THE RIGHT VARIABLE OR IS IT TERM?
      var URL = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp";
      // parse body (string) to a JSON object
      var jsonData = JSON.parse(body);

      //bandData is string containing band data that will print to console
      //Need to look at API results to get correct info
      var bandData = [

      ].join("\n\n");
    }
  }
}

//print if searching OMDb
if (search === "movie") {
  console.log("Searching fo movie");

}