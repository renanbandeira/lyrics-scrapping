'use strict';
module.exports = function(app) {
  var lyricsScrapping = require('../controllers/lyricsScrappingController');
  const cors = require('cors');

  // lyrics Route
  app.get('/', cors(), lyricsScrapping.fetch_lyrics)
};
