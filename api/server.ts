import express from 'express'
import cors from 'cors'
import posts from './routes/posts'
const app = express()


app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/posts', posts)


app.listen(8000, () => {
    console.log('listening on http://localhost:8000')
})