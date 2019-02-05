const search      = require('express').Router();
const spotifyApi  = require('../../controllers/spotifyApi');

/**
 * [Spotify] Search Endpoints
 */

// Search artists.
search.get('/artists/:artist', (req, res) => {
  spotifyApi.searchArtists(req.params.artist)
    .then((data) => {
      res.send(data);
    }, (err) => {
      console.log(err);
      res.status(503).send({ message: 'Spotify API error.' });
    });
});


module.exports = search;