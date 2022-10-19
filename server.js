const express = require('express');
const cors = require('cors')


const posts = require('./routes/posts')
const path = require('path')
const app = express()
const headers = (req, res, next) => {
	const origin = (req.headers.origin == 'http://localhost:3000') ? 'http://localhost:3000' : 'https://mywebsite.com'
	res.setHeader('Access-Control-Allow-Origin', 'http://codeideas.herokuapp.com')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
	res.setHeader('Access-Control-Allow-Credentials', true)
	next()
}
app.use(cors(
    
))

app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/posts', headers, posts)
const port = process.env.PORT || 8000


app.use(express.static('build'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})


app.listen(port, () => {
    console.log('listening on ', port)
})