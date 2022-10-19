const express = require('express');
const router = express.Router();
const post = require('../models/post');
const cors = require('cors');
const mongoose = require('mongoose');
const db = "mongodb+srv://pvwnonian:W7KNsY1NoeFL2u9l@cluster0.gzaapzr.mongodb.net/CodeIdeas"
router.use(cors())

const headers = (req, res, next) => {
	const origin = (req.headers.origin == 'http://localhost:3000') ? 'http://localhost:3000' : 'https://mywebsite.com'
	res.setHeader('Access-Control-Allow-Origin', origin)
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
	res.setHeader('Access-Control-Allow-Credentials', true)
	next()
}
mongoose.connect(db).then(() => {
    console.log('mongodb connection established');
  }).catch(err => {
    console.log(err);
});


router.post('/new', headers, function (req, res) {
    
    const np = new post({
        title: req.body.title,
        text: req.body.text,
        
        
        
    })
    console.log(req.body)
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
router.get('/random', headers, (req, res) => {
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





router.get('/', headers, (req, res) => {
    res.send('read the api docs at ----')
}
)

module.exports = router