const News = require('../models/News');

exports.create = (newsData) => News.create(newsData);

exports.getAll = () => News.find();

exports.edit = (newsId, newsData) => News.findByIdAndUpdate(newsId, newsData);

exports.getOne = (newsId) => News.findById(newsId);

exports.delete = (newsId) => News.findByIdAndDelete(newsId);