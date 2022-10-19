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

})

router.get('/', (req, res) => {
    res.send('read the api docs at ----')
}
)

module.exports = router