const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
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
    sport: {
        type: String,
        required: true,
    },
});

const News = mongoose.model("News", NewsSchema);

module.exports = News;