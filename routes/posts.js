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
        id: 'test'
        
    })
    console.log(req.body)
    if(req.body.tags) {
        np.tags = req.body.tags;
    }
    post.findOne({}, {}, { sort: { 'date' : -1 } }, function(err, post) {
        const newid = post.id + 1
        console.log(newid)
        np.id = newid
      });
    np.save((err, doc) => {
        if(err) {console.log(err);
            res.send(err)
        }
        res.sendStatus(200)
    }
    
)
})
router.get('/random', (req, res) => {
    let posts = [];
    post.count().exec(function(err, count) {

        // Get a random entry
        var random = Math.floor(Math.random() * count)
     
        // Again query all posts but only fetch one offset by our random #
        post.findOne().skip(random).exec(
           function(err, result) {
              // Tada! random post
              res.send(result)
           })
     })
})





router.get('/', (req, res) => {
    res.send('read the api docs at ----')
}
)

module.exports = router