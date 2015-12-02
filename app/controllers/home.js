var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};




router.get('/foo', function (req, res, next) {

  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Generator-Express MVC '+ req.session.views,
      articles: articles
    });
});
