const League = require("../models/League");

exports.getLeague = (country) => League.findOne(country); 
