import React, { Fragment, useEffect, useState } from 'react';
import Grid from "@material-ui/core/Grid";
import Api from '../../utils/Api';
import Article from './Article';

const Articles = (props) => {

    const [articles, setArticles] = useState([]);

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
        } catch (error) {
            console.error("error when getting articles");
            console.error(error);
        }
    }

    return (
       <Fragment>
            <Grid id="articlesId" container justify="center" spacing={3}>
                {articles.map(article => (
                    <Article key={article.articleId} article={article} />
                ))}
            </Grid>
       </Fragment>
    );
}

export default Articles;