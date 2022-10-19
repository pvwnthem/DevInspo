import express from 'express'
import cors from 'cors'
import posts from './routes/posts'
import path from 'path'
const app = express()


app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/posts', posts)
const port = process.env.PORT || 8000


app.use(express.static('build'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})


app.listen(port, () => {
    console.log('listening on ', port)
})