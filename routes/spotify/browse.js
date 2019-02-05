const browse      = require('express').Router();
const spotifyApi  = require('../../controllers/spotifyApi');

/**
 * [Spotify] Browse Endpoints
 */

// Get genres.
browse.get('/genres', (req, res) => {
  const limit = req.query.limit || 20;
  const offset = req.query.offest || 0;
  spotifyApi.getCategories({ limit: limit, offset: offset, country: 'US' })
    .then((data) => {
      res.send(data.body)
    }, (err) => {
      console.log(err);
      res.status(503).send({ message: 'Spotify API error.' })
    })
});

// Get new releases.
browse.get('/new-releases', (req, res) => {
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
browse.get('/featured-playlists', (req, res) => {
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

module.exports = browse;