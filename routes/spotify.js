const express = require('express');
const spotifyApi = require('../controllers/spotifyApi');
const parallel = require('async/parallel');
const router = express.Router();

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

// Get categories.
router.get('/browse/categories', (req, res) => {
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

/**
 *  [Spotify] Get Artist Information
 */

// router.get('/artists/:id', (req, res) => {
//   spotifyApi.getArtist(req.params.id)
//     .then((data) => {
//       res.send(data.body);
//     }, (err) => {
//       console.log(err);
//       res.status(503).send({ message: 'Spotify API error.' })
//     })
// });

router.get('/artists/:id', (req, res) => {
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

module.exports = router;