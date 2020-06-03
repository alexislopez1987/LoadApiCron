import Api from '../utils/Api';

export default class ConnectApi {
    async getArticles() {
        try {
            const articles = await Api.get(`articles`);
            return articles;
        } catch (err) {
            console.error(err);
            throw err;
        }  
    }

    async deleteArticle(id) {
        try {
            await Api.delete(`article/${id}`);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}