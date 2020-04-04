import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { FaTrashAlt } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({ 
    root: {
        background: 'white',
        border: 1,
        padding: '0 30px',
        borderColor: 'black',
        fontSize: '13pt',
        borderBottom: '1px solid #ccc',
        cursor: 'pointer',
        "&:hover": {
            background: '#fafafa'
        }
      },
    articleAuthor: {
        color: '#999'
    }, 
    delete: {
        float: 'right',
        color: '#333'
    },
    articleTitle: {
        color: '#333'
    },
    iconDelete: {
        paddingLeft: '10px',
        paddingRight: '10px'
    }
}));

const clickDelete = (e, articleId) => {
    alert('click delete ' + articleId);
    e.stopPropagation();
}

const clickOpenUrl = (url) => {
    if (url) {
        window.open(url, "_blank");
    }
}

const Article = (props) => {

    const styleClass = useStyles();

    return (
        <Grid item md={10} className={styleClass.root} onClick={() => clickOpenUrl(props.article.url)}>
            <span className={styleClass.articleTitle}>{props.article.title}</span> - 
            <span className={styleClass.articleAuthor}> {props.article.author}</span>
            <span className={styleClass.delete}> {props.article.created} 
                <FaTrashAlt className={styleClass.iconDelete} onClick={(e) => clickDelete(e, props.article.articleId)} /> 
            </span>   
        </Grid>
    );
}

export default Article;