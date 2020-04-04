const getArticles = require('./getArticles');
const saveArticles = require('./saveArticles');

const savingArticles = async () => {
    try {
        const articles = await getArticles(process.env.ARTICLES_URL);
        await saveArticles(articles);
    } catch (error) {
        console.error("Error manager for saving articles", error);
    }
}

module.exports = savingArticles;

