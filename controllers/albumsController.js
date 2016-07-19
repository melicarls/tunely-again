/************
 * DATABASE *
 ************/

var db = require('../models');

function index(req, res) {
  db.Album.find(function(err, foundAlbums) {
    res.json(foundAlbums);
  });
}

function create(req, res) {
  var newAlbum = new db.Album({
    name: req.body.name,
    artistName: req.body.artistName,
    releaseDate: req.body.releaseDate,
    genres: req.body.genres.split(',')
  });
  newAlbum.save(function (err, savedAlbum) {
    if (err) {
      return console.log("There was an error: ", err);
    }
    res.json(savedAlbum);
  });
}

function show(req, res) {
  db.Album.findById(req.params.id, function(err, foundAlbum) {
    if (err) {
      return console.log("The album could not be found: ", err);
    }
    res.json(foundAlbum);
  });
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
