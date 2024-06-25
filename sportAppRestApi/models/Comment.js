const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    username: {
        type: String,
    },
    commentText: {
        type: String, 
        required: true,
    },
    articleId: {
        type: mongoose.Types.ObjectId,
        ref: "News",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;