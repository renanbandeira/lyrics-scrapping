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
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Cache-Control': 'no-cache',
      'Accept': '*/*',
    }
	}, (err, response, body) => {
    console.log({
      req,
      response,
      body,
      err,
    })
    if (err) {
      res.send(err);
      return;
    }
    res.send(body);
  });
};


exports.fetch_lyrics_post = async function(req, res) {
  const url = req.body.url;
  if (!url) {
    res.status(400).send({
      message: 'URL is not set!'
    });
    return;
  }

  const axios = require('axios');

  try {
    const response = await axios.get(url, {
      headers: {
        'Accept-Encoding': 'gzip, deflate, br',
        'User-Agent': 'Request-Promise',
        'Accept': '*/*',
      }
    })
    res.send(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error.response.body);
    res.send(error);
  }
};
