const router = require("express").Router();

const userController = require("./controllers/userController");
const newsController = require("./controllers/newsController");

router.use('/users', userController);
router.use('/news', newsController);

module.exports = router;