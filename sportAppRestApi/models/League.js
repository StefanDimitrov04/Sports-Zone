const mongoose = require('mongoose');

const LeaguesSchema = new mongoose.Schema({

    sport: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
    },
    teams: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Team',
    }]
})

const League = mongoose.model('League', LeaguesSchema);

module.exports = League;