const express = require('express');
const router = express.Router();
const { 
    getArticles,
    addArticle 
} = require('../../data/articles')

/* GET articles listing. */
router.get('/', async function (req, res, next) {
    try{
        const data = await getArticles();
        res.send(data);
    } catch(err){
        console.log(err);
        res.status(500).send('Internal Server Issue, check logs');
    }
});

/* POST article Creation */
router.post('/', async function(req, res, next) {
    try{
        // TODO Handling Request Data and Create Function Call
        const data = await addArticle(req.body);
        res.send(data);
    } catch(err){
        if(err.msg){
            res.status(400).send(err);
        }else {
            console.log(err);
            res.status(500).send('Internal Server Issue, check logs');
        }
    }
});

module.exports = router;
