const express = require('express');
const router = express.Router();
const cfg = require('./conf.json');
const post = require('./models/post');
const mongoose = require('mongoose');
const db = cfg.dburl


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