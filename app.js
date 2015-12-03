var express = require('express'),
    config = require('./config/config'),
    session = require('express-session');

var app = express();

require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});




