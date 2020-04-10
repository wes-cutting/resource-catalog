const express = require('express');
const router = express.Router();

const { getArticles } = require('../data/articles');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Resource Wiki' });
});

/* GET Articles page. */
router.get('/articles', async function (req, res, next) {
  const articles = await getArticles();
  res.render('articles', { title: "Articles", articles });
});

module.exports = router;
