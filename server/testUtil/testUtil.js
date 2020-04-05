const mongoose = require('mongoose'),
article = mongoose.model('Article');

exports.save_article = async () => {

    try {

        const articleToSave = new article({
            status: 1,
            title: 'test title',
            created: new Date(),
            url: "test url",
            author: 'test author',
            articleId: 1
        });
        
        const savedArticle = await articleToSave.save();

        return savedArticle;

    } catch (error) {
        console.error("error saving article for testing");
        console.error(error);
    }
}

exports.delete_article = async (id) => {
    try {
       const deletedArticle = await article.findOneAndRemove({ _id: id });
    } catch (error) {
        console.error("error deleting article for testing");
        console.error(error);
    }
}
