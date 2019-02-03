const axios = require('axios');

const api = axios.create({
  baseURL: `http://localhost:5000/api`
});

export const getNewReleases = (offset = 0, limit = 20) => {
  return api.get(`/spotify/browse/new-releases?offset=${offset}&limit=${limit}`);
};

export const getArtistInfo = (artistId) => {
  return api.get(`/spotify/artists/${artistId}`);
};