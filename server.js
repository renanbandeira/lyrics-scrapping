var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

app.use(express.json())
var routes = require('./routes/lyricsScrappingRoute'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
