import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { FaTrashAlt } from 'react-icons/fa';
import moment from 'moment';

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
        paddingLeft: '30px',
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

const formatDate = (createdAt) => {
    let momentDate = moment(createdAt);

    if (moment(momentDate).isSame(moment(), 'day')) {
        return momentDate.format('HH:mm');
    } else if (moment(momentDate).isSame(moment().add(-1, 'days'), 'day')) {
        return 'Yesterday';
    }
    else {
        return momentDate.format('MMM DD');
    }
}

const Article = (props) => {

    const styleClass = useStyles();

    return (
        <Grid item md={10} className={styleClass.root} onClick={() => clickOpenUrl(props.article.url)}>
            <span className={styleClass.articleTitle}>{props.article.title}</span> - 
            <span className={styleClass.articleAuthor}> {props.article.author}</span>
            <span className={styleClass.delete}> {formatDate(props.article.created)}
                <FaTrashAlt className={styleClass.iconDelete} onClick={(e) => clickDelete(e, props.article.articleId)} /> 
            </span>   
        </Grid>
    );
}

export default Article;