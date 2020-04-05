import React, { Fragment, useEffect, useState } from 'react';
import Grid from "@material-ui/core/Grid";
import Api from '../../utils/Api';
import Article from './Article';

const Articles = (props) => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => { 
        async function fetchData() {
            await getArticles();
        }
        fetchData();
    }, []);

    const getArticles = async () => {
        try {
            let articles = await Api.get(`articles`);
            setArticles(articles.data);
            setIsLoading(false);
        } catch (error) {
            console.error("error when getting articles");
            console.error(error);
            setIsLoading(false);
        }
    }

    const clickArticleDeleteHandler = (e, id) => {
        e.stopPropagation();
        deleteArticle(id);
    }

    const deleteArticle = async (id) => {
        try {
            await Api.delete(`article/${id}`);
            await getArticles();
        } catch (error) {
            console.error('Error trying to delete');
            console.error(error);
        }
    }

    if (!isLoading && articles.length === 0) {
        return (
            <Grid container justify="center" spacing={3}>
                <Grid item md={10} >
                    Articles not found! :(
                </Grid>
            </Grid>
        );
    }

    return (
       <Fragment>
            <Grid id="articlesId" container justify="center" spacing={3}>
                {articles.map(article => (
                    <Article key={article.articleId} article={article} clickDelete={clickArticleDeleteHandler} />
                ))}
            </Grid>
       </Fragment>
    );
}

export default Articles;