const express = require('express');
const router = express.Router();
const post = require('../models/post');
const mongoose = require('mongoose');
const db = "mongodb+srv://pvwnonian:W7KNsY1NoeFL2u9l@cluster0.gzaapzr.mongodb.net/CodeIdeas"


mongoose.connect(db).then(() => {
    console.log('mongodb connection established');
  }).catch(err => {
    console.log(err);
});


router.post('/new', function (req, res) {
    const np = new post({
        title: req.body.title,
        text: req.body.text,
        
    })
    if(req.body.tags) {
        np.tags = req.body.tags;
    }
    np.save((err, doc) => {
        if(err) {console.log(err);
            res.send(err)
        }
        res.sendStatus(200)
    }
    
)
})

router.get('/', (req, res) => {
    res.send('read the api docs at ----')
}
)

module.exports = router