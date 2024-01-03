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
  const url = req.body.url || req.query.url;
  if (!url) {
    res.status(400).send({
      message: 'URL is not set!'
    });
    return;
  }

  const request = require('request');
  const username = "renanbandeira",
    apiKey = process.env.SCRAPING_BOT_API_KEY,
    auth = "Basic " + Buffer.from(username + ":" + apiKey).toString("base64")

  request(
    {
        method: 'POST',
        url: 'http://api.scraping-bot.io/scrape/raw-html',
        json: {
            url: url
        },
        headers: {
            Accept: 'application/json',
            Authorization : auth
        },
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
