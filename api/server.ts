import express from 'express'
import cors from 'cors'
import posts from './routes/posts'
const app = express()


app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/posts', posts)
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('listening on ', port)
})