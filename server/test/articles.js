const chai = require("chai");
const chaiHttp = require("chai-http");
let assert = require('chai').assert;
const server = require("../index");
const testUtil = require('../testUtil/testUtil')

chai.use(chaiHttp);

describe('Articles API', () => {

    describe("GET /api/v1/articles", () => {

        it("It should GET all the articles", (done) => {
            chai.request(server)
                .get("/api/v1/articles")
                .end((err, response) => {
                    assert.typeOf(response.body, 'array');
                    assert.equal(response.status, 200);
                    assert.isNull(err, 'there was no error');

                    let deletedArticles = response.body.filter(function(article) {
                        return article.status == 0;
                    });

                    assert.equal(deletedArticles.length, 0);

                    if (response.body.length > 2) {
                        let firstArticle = response.body[0];
                        let lastArticle =  response.body[response.body.length - 1];

                        assert.isAtLeast(new Date(firstArticle.created), new Date(lastArticle.created), 'created date of first article is greater or equal to created date of last article');
                    }

                    done();
            });
        });

        it("It should NOT GET all the articles", (done) => {
            chai.request(server)
                .get("/api/articles")
                .end((err, response) => {
                    assert.equal(response.status, 404);

                done();
            });
        });

    });
    
    describe("DELETE /api/v1/article/:id", () => {

        let article;

        beforeEach(async function() {
            const articleInDb = await testUtil.save_article();
            article = articleInDb;
        });

        afterEach(async function() {
            await testUtil.delete_article(article.id);
        });

        it("It should DELETE an existing article", (done) => {
            const articleId = article.id;
            chai.request(server)                
                .delete("/api/v1/article/" + articleId)
                .end((err, response) => {
                    assert.equal(response.status, 200);
                    assert.typeOf(response.body, 'object');
                    assert.isNull(err, 'there was no error');
                    assert.equal(response.body.status, false);
                done();
            });
        });

        it("It should throw an error when DELETE an non-existent article", (done) => {
            const articleId = -1;
            chai.request(server)                
                .delete("/api/v1/article/" + articleId)
                .end((err, response) => {
                    assert.equal(response.status, 500);
                    assert.isNotNull(response.error, 'there was an error');
                done();
            });
        });

    });
});