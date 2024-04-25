const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    sport: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    matchDescrp: {
        type: String,
        required: true,
    },
    image: {
        type: String, 
        required: true,
    },
});

const News = mongoose.model("News", NewsSchema);

module.exports = News;