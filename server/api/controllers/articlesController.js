const mongoose = require('mongoose'),
article = mongoose.model('Article');

exports.list_all_articles = async (req, res) => {

    try {
        const articles = await article.find({});
        res.json(articles);
    } catch (err) {
        res.status(500).json({'error': `articles can't be got`});
    }
};