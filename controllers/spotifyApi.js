const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});

const refreshClientCredentials = () => {
  spotifyApi.clientCredentialsGrant().then(
    function (data) {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function (err) {
      console.log('Error occurred trying to retrieve the access token!', err.message);
    }
  );
};

/**
 *  Gets a fresh access token on initialization and then ensures that the
 *  token is refreshed right before it expires (one hour automatically per
 *  Spotify Web API).
 */
refreshClientCredentials();
setInterval(() => {
  refreshClientCredentials()
}, 3590000);

module.exports = spotifyApi;