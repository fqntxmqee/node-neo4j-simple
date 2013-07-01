
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var config = require('./config/config.js');
var route = require('./config/route.js');

var app = express();

// config
config(app, express);

// routes
route(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('node-neo4j-simple server listening on port ' + app.get('port'));
});
