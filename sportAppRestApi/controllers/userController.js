const router = require('express').Router();

const userManager = require('../managers/userManager');

router.post('/register', async (req, res) => {

    try {

        const user = await userManager.register(req.body);
        console.log(user);
        res.json(user);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message);
    }

});

router.post('/login', async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await userManager.login(email, password);
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
})

router.get('/logout', (req, res) => {
    res.json({message: "logged out!"});
    res.end();
});

module.exports = router;