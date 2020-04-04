require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const cronJobGetArticles = require('./core/cronJobGetArticles');
const mgrArticles = require('./core/mgrArticles');

const app = express();

require('./api/models/Article');

const routes = require('./api/routes/routes');

const PORT = process.env.NODE_PORT || 8080;
const HOST =  process.env.NODE_HOST || '0.0.0.0';

mongoose.Promise = global.Promise;

const options = {
    useNewUrlParser: true,
    autoIndex: false,
    reconnectTries: 3,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0
}

const connect = () => {
    console.log('starting MongoDB connection')
    mongoose.connect(`mongodb://${process.env.DBHOST}:${process.env.DBPORT}/nodejsarticles`, options).then(() => {
        console.log('MongoDB is connected');
    }).catch(err => {
        console.error('Error trying to connect mongodb');
        console.error(err);
    })
}

connect();

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use('/api/v1', routes);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

(async () => {
    await mgrArticles();
})();

cronJobGetArticles;