const express = require('express');
const router = express.Router();
const post = require('../models/post');
const cors = require('cors');
const crypto = require('crypto');
const mongoose = require('mongoose');
const db = "mongodb+srv://pvwnonian:W7KNsY1NoeFL2u9l@cluster0.gzaapzr.mongodb.net/CodeIdeas"
router.use(cors())

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

router.get('/removelike', function (req, res) {
    const id = String(req.query.id)
    console.log(id, 'id')
    post.findOneAndUpdate({id: id}, (err, doc) => {
        if (err) {
            res.send(err)
        }
        try {
            doc.likes.pop()
            console.log(doc, doc.likes)
            doc.save()
        }
        catch (e) {
            console.log(e)
        }

    })
})

router.get('/addlike', function (req, res) {
    const id = String(req.query.id);
    console.log(id, 'id')
    post.findOneAndUpdate({id: id}, (err, doc) => {
        if (err) {
            res.send(err)
        }
        try {
            doc.likes.push('1')
            console.log(doc, doc.likes)
            doc.save()
            res.sendStatus(200)
        }
        catch (e) {
            console.log(e)
        }

    })
})


router.get('/random', (req, res) => {
    let posts = [];
    post.count().exec(function(err, count) {

        // Get a random entry
        let randomnum = ()=> crypto.webcrypto.getRandomValues(new Uint32Array(1))[0]/2**32;

        var random = Math.floor(randomnum() * count)
     
        // Again query all posts but only fetch one offset by our random #
        post.findOne().skip(random).exec(
           function(err, result) {
              // Tada! random post
              res.send(result)
           })
     })
})





router.get('/',  (req, res) => {
    res.send('read the api docs at ----')
}
)

module.exports = router