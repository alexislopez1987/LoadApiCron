const axios = require("axios");

const getArticles = async url => {
    try {
        const response = await axios.get(url);
        const data = response.data.hits;
        return data;
    } catch (error) {
        console.log(error);
    }
};

module.exports = getArticles