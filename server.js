const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');

const posts = require('./routes/posts')
const path = require('path')
const app = express()
app.use(cookieParser());


//app.get('/pp', (req, res) => {
    //res.sendFile(path.join( __dirname, 'src', 'components', 'pp.html'))
//})

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);

app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/posts', posts)
const port = process.env.PORT || 8000


app.use(express.static('build'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})


app.listen(port, () => {
    console.log('listening on ', port)
})