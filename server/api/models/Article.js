let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: {
        type: String,
        required: 'article title is required'
    },
    created: {
        type: Date,
        required: 'article created at is required'
    },
    status: {
        type: Boolean,
        default: true
    },
    url: {
        type: String
    },
    author:{
        type: String,
        required: 'article author is required'
    }, 
    articleId: {
        type: Number,
        required: 'article id is required'
    }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});

ArticleSchema.index({
    articleId: 1
});

module.exports = mongoose.model('Article', ArticleSchema);