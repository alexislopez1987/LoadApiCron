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

const onEnterHandler = (e) => {
    e.preventDefault();

    let parentId = null;
    if (e.target.nodeName === 'DIV') {
        parentId = e.target.id;
    } else {
        parentId = e.target.parentNode.id;
    }

    let parentDiv = document.getElementById(parentId);
    let iconDelete = parentDiv.lastChild.children[0];
    iconDelete.classList.remove("invisible");
}

const onLeaveHandler = (e) => {
    e.preventDefault();

    let parentId = null;
    if (e.target.nodeName === 'DIV') {
        parentId = e.target.id;
    } else {
        parentId = e.target.parentNode.id;
    }

    let parentDiv = document.getElementById(parentId);

    if (parentDiv) {
        let iconDelete = parentDiv.lastChild.children[0];
        iconDelete.classList.add("invisible");
    }
}

const Article = (props) => {

    const styleClass = useStyles();
    
    return (
        <Grid id={props.article.id} item md={10} className={styleClass.root} onClick={() => clickOpenUrl(props.article.url)} onMouseEnter={onEnterHandler} onMouseLeave={onLeaveHandler}>
            <span className={styleClass.articleTitle}>{props.article.title}</span> - 
            <span className={styleClass.articleAuthor}> {props.article.author}</span>
            <span className={styleClass.delete}> {formatDate(props.article.created)}
                <FaTrashAlt id="btnDelete" className={`${styleClass.iconDelete} invisible`} onClick={(e) => props.clickDelete(e, props.article.id)} /> 
            </span>   
        </Grid>
    );
}

export default Article;