var express = require('express'),
    config = require('./config/config'),
    session = require('express-session');


var app = express();
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

require('./config/express')(app, config);


app.use(function (req, res, next) {
  var views = req.session.views;

  if (!views) {
    views = req.session.views = {};
  }

  // get the url pathname
  var pathname = parseurl(req).pathname

  console.log('req.session.views' + req.session.views);

  // count the views
  req.session.views[pathname] = (views[pathname] || 0) + 1

  next()
})


app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});




