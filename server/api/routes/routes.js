const express = require('express');
const router = express.Router();

const articlesController = require('../controllers/articlesController');

router.get('/articles', function (req, res) {
    articlesController.list_all_articles(req, res);
})

module.exports = router