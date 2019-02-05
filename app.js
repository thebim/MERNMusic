/**
 * Modules
 */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/**
 * Route Imports
 */
const spotifyRouter = require('./routes/spotify');

/**
 * Config
 */
const port = process.env.PORT || 5000;

/**
 * Express Setup
 */
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/spotify', spotifyRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});