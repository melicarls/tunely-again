var db = require('../models');

function create(req, res) {
  var albumId = req.params.id;
  console.log("Looking for an album with this ID: ", albumId);
  db.Album.findById(albumId, function(err, foundAlbum) {
    console.log("Found album: ", foundAlbum);
    if (err) {
      return console.log("That album couldn't be found: ", err);
    }
    var newSong = new db.Song({
      name: req.body.name,
      trackNumber: req.body.trackNumber
    });
    foundAlbum.songs.push(newSong);
    newSong.save(function(err, savedSong) {
      if (err) {
        return console.log("The song could not be saved: ", err);
      }
      foundAlbum.save(function(err, savedAlbum) {
        if (err) {
          console.log("The album couldn't be saved: ", err);
        }
        res.json(savedSong);
      });
    });
  });
}

module.exports = {
  create: create
};
