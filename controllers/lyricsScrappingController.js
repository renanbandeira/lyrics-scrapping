'use strict';

exports.fetch_lyrics = function(req, res) {
  const url = req.query.url;
  if (!url) {
    res.status(400).send({
      message: 'URL is not set!'
    });
    return;
  }

  const request = require('request');

  request({
    method: 'GET',
		url: url,
    headers: {
      'User-Agent': 'Request-Promise'
    }
	}, (err, response, body) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send(body);
  });
};


exports.fetch_lyrics_post = function(req, res) {
  const url = req.body.url;
  if (!url) {
    res.status(400).send({
      message: 'URL is not set!'
    });
    return;
  }

  const request = require('request');

  request({
    method: 'GET',
		url: url,
    headers: {
      'User-Agent': 'Request-Promise'
    }
	}, (err, response, body) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send(body);
  });
};
