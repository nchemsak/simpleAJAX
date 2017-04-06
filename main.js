$.ajax({
  url: "songs.json"
}).done(listSongData);

function listSongData(songData) {
  console.log("AJAX SongData: ", songData);
  songData.songs.forEach(function(obj) {
    var artist = obj.artist;
    var songs = obj.title;
    var album = obj.album;
    $(".container").append(`<li>Artist: ${artist + "<br>Album: " + album + "<br>Song: " + songs}</li><br>`);
  });
};
