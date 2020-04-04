const mongoose = require('mongoose'),
article = mongoose.model('Article');

exports.list_all_articles = async (req, res) => {

    try {
        const articles = await article.find({status: 1});
        res.json(articles);
    } catch (err) {
        res.status(500).json({'error': `articles can't be got`});
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
        const query = await article.findByIdAndUpdate({ _id: id }, { status: 0 });
        res.json({msg: `article ${id} deleted`});
    } catch (error) {
        if (error.kind == 'ObjectId') {
            res.status(500).json({'error': `invalid id ${id}`});
        }
        console.error(error);
        res.status(500).json({'error': `article ${id} can't be deleted`});
    }
};