const router = require("express").Router();

const userController = require("./controllers/userController");
const newsController = require("./controllers/newsController");
const leagueController = require("./controllers/leagueController");

router.use('/users', userController);
router.use('/news', newsController);
router.use('/league', leagueController);


module.exports = router;