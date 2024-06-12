const router = require('express').Router();
const { getLeague } = require('../managers/leagueManager');
const League = require("../models/League");
const Team = require("../models/Team");

router.get('/:sport/:country', async (req, res) => {

    try {

   const country = req.params.country;
   const sport = req.params.sport;
   const league = await getLeague({sport, country}).populate('teams');
   res.json(league);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const {sport, country, teams}  = req.body;

    try {
        
        const savedTeams = await Team.insertMany(teams);

        const league = new League({
            sport,
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