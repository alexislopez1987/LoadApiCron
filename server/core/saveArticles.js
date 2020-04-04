const mongoose = require('mongoose');
const Article = require('../api/models/Article');

const saveArticles = async (articles) => {
    console.log("running saveArticles");
    try {
        if (articles.length > 0) {

            for (const article of articles) {
                if ((article.story_title || article.title) && article.story_id) {

                    const newArticle = new Article({
                        title: article.story_title || article.title,
                        created: article.created_at,
                        url: article.story_url || article.url,
                        author: article.author,
                        articleId: article.story_id
                    });

                    const articleInDb = await Article.find({ articleId: article.story_id });

                    if (articleInDb.length == 0) {
                        const savedArticle = await newArticle.save();
                    }
                }
            }
        }   
    } catch (error) {
        console.error("error saving articles", error);
    }
}

module.exports = saveArticles;
