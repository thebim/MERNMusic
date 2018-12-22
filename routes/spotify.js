const express = require('express');
const router = express.Router();
const spotifyApi = require('../controllers/spotify-api');

/**
 * [Spotify] Search Endpoints
 */

// Search artists.
router.get('/search/artists/:artist', (req, res) => {
  spotifyApi.searchArtists(req.params.artist)
    .then((data) => {
      res.send(data);
    }, (err) => {
      console.log(err);
      res.status(503).send({ message: 'Spotify API error.' });
    });
});

/**
 * [Spotify] Browse Endpoints
 */

// Get new releases.
router.get('/browse/new-releases', (req, res) => {
  const limit = req.query.limit || 20;
  const offset = req.query.offset || 0;
  spotifyApi.getNewReleases({ limit: limit, offset: offset, country: 'US' })
    .then((data) => {
      res.send(data.body);
    }, (err) => {
      console.log(err);
      res.status(503).send({ message: 'Spotify API error.' });
    });
});

// Get featured playlists.
router.get('/browse/featured-playlists', (req, res) => {
  const limit = req.query.limit || 5;
  const offset = req.query.offset || 0;
  spotifyApi.getFeaturedPlaylists({ limit: limit, offset: offset, country: 'US' })
    .then((data) => {
      res.send(data.body);
    }, (err) => {
      console.log(err);
      res.status(503).send({ message: 'Spotify API error.' });
    });
});

module.exports = router;