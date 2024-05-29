const router = require('express').Router();
const { getLeague } = require('../managers/leagueManager');
const League = require("../models/League");
const Team = require("../models/Team");

router.get('/:country', async (req, res) => {

    try {

   const country = req.params.country;
   const league = await getLeague({country}).populate('teams');
   res.json(league);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const {country, teams}  = req.body;

    try {
        
        const savedTeams = await Team.insertMany(teams);

        const league = new League({
        country,
        teams: savedTeams.map(team => team._id)
        });

         const savedLeague = await league.save();
        res.status(201).json(savedLeague);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

module.exports = router;