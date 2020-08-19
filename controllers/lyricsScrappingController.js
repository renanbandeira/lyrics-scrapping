'use strict';

exports.fetch_lyrics = function(req, res) {
  const url = req.query.url;
  if (!url) {
    resres.status(400).send({
      message: 'URL is not set!'
    });
    return;
  }

  const request = require('request');

  request({
    method: 'GET',
		url: url
	}, (err, response, body) => {

    if (err) {
      res.send(err);
      return;
    }
    res.send(body);
  });
};
