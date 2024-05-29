const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    clubName: {
        type: String,
        required: true,
    },
    clubPoints: {
        type: Number,
        required: true,
    },
    matchesPlayed: {
        type: Number,
        required: true,
    }
})

const Team = mongoose.model('Team', TeamSchema);
module.exports = Team;
