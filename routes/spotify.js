const spotifyRouter = require('express').Router();
const artistRouter  = require('./spotify/artists'),
      browseRouter  = require('./spotify/browse'),
      searchRouter  = require('./spotify/search');

spotifyRouter
  .use('/artists', artistRouter)
  .use('/browse', browseRouter)
  .use('/search', searchRouter);

module.exports = spotifyRouter;