const artists      = require('express').Router();
const spotifyApi  = require('../../controllers/spotifyApi');
const parallel    = require('async/parallel');

artists.get('/:id', (req, res) => {
  parallel([
    function(cb) {
      spotifyApi.getArtist(req.params.id)
        .then((data) => {
          cb(null, data.body);
        }, (err) => {
          console.log(err);
          res.status(503).send({ message: 'An error occurred fetching the artist\'s information.' });
        });
    },
    function(cb) {
      spotifyApi.getArtistAlbums(req.params.id)
        .then((data) => {
          cb(null, data.body);
        }, (err) => {
          console.log(err);
          res.status(503).send({ message: 'An error occurred fetching the artist\'s albums.' });
        });
    }
  ], (err, results) => {
    const artistInfo = {
      info: results[0],
      albums: results[1]
    };
    res.send(artistInfo);
  });
});

module.exports = artists;