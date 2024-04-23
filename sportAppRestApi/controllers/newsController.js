const router = require('express').Router();
const newsManager = require('../managers/newsManager');

router.get('/home', async (req, res) => {
    try {
        const articles = await newsManager.getAll();
        res.json(articles);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/:newsId', async (req, res) => {
    try {
        const news  = await newsManager.getOne(req.body.newsId);
        res.json(news);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/create', async (req,res) => {
    try {
        const newsData = await newsManager.create(req.body);
        
        res.status(201).json({messsage: "Article created succesfully"});
    } catch (error) {
        res.status(400).json({message: error.message});
    }  
});

router.put('/:newsId/edit', async(req,res) => {
    try {
        const newsId = req.body.newsId;
        const newsData = req.body;
        const news = await newsManager.edit(newsId, newsData);
        res.status(200).json({message: "Film edited successfully!"});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.delete('/:newsId/delete', async (req, res) => {
    const news = await newsManager.delete(req.params.newsId);

});

module.exports = router;
