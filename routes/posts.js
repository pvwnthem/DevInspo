const express = require('express');
const router = express.Router();
const post = require('../models/post');
const cors = require('cors');
const crypto = require('crypto');
const mongoose = require('mongoose');
const { log } = require('console');
const db = "mongodb+srv://pvwnonian:W7KNsY1NoeFL2u9l@cluster0.gzaapzr.mongodb.net/CodeIdeas"
router.use(cors())

mongoose.connect(db).then(() => {
    console.log('mongodb connection established');
  }).catch(err => {
    console.log(err);
});


router.post('/new', function (req, res) {
    if (req.body.title && req.body.text) {
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
    }else {
        
        res.send('not all fields filled out!')
    }
    
    console.log(req.body)
   
    
    
    
})
router.get('/addlike', async function (req, res) {
    console.log(req.query.id)
    const id = req.query.id
     post.findOneAndUpdate({_id: id}, { $inc: { likes: 1 }}, (err, doc) => {
        if(err) {console.log(err);
            res.send(err)
        }
        if (doc) {
            
            res.send(String(doc))
        }
    })
})
router.get('/removelike', async function (req, res) {
    console.log(req.query.id)
    const id = req.query.id
     post.findOneAndUpdate({_id: id}, { $inc: { likes: -1 }}, (err, doc) => {
        if(err) {console.log(err);
            res.send(err)
        }
        if (doc) {
            
            res.send(String(doc))
        }
    })
})


// get likes for a doc route 
// 

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



router.get('/recent', async (req, res) => {
    const limit = req.query.limit
    let data = await post.find({}).sort({"date": -1}).limit(limit)
    res.send(data)
})
router.get('/popular', async (req, res) => {
    const limit = req.query.limit
    let data = await post.find({}).sort({"likes": -1}).limit(limit)
    data[0].tags.push('popular')
    
    console.log(data)
    res.send(data)
})
router.get('/',  (req, res) => {
    res.send('read the api docs at ----')
}
)

module.exports = router