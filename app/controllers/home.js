var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');
var session = require('express-session');
var parseurl = require('parseurl');

module.exports = function (app) {
  app.use('/', router);
};

router.use(session({
  secret: 'derp a derp',
  resave: false,
  saveUninitialized: true
}));

router.use(function (req, res, next) {

  var views = req.session.views;
  var content = req.session.content;
  if (!views) {
    views = req.session.views = {};
  }

  if(!content){
    content = req.session.content = {};
  }

  var pathname = parseurl(req).pathname
  req.session.views[pathname] = (views[pathname] || 0) + 1

  if(req.body.name && req.body.name !== 'undefined')
  {
    req.session.content[pathname] += req.body.name + ' - ';
  }

  next()
})

router.get('/', function (req, res, next) {

  var content = req.session.content['/'];

  if(content){
    content = content.replace('undefined', ''); //TODO, work out why we always get an undefined entry
  }

  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Express Session Playaround',
      articles: articles,
      pageViews: req.session.views['/'],
      sessionId: req.session.id,
      sessionData: content
    });
});

router.post('/', function (req, res, next) {

  res.render('index', {
    title: 'Express Session Playaround',
    articles: '',
    pageViews: req.session.views['/'],
    sessionId: req.session.id,
    sessionData: req.session.content['/'].replace('undefined', '') //TODO, work out why we always get an undefined entry
  });
});
