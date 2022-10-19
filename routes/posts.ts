import express from 'express'
const router = express.Router();

router.get('/', (req, res) => {
    res.send('read the api docs at ----')
}
)

export default router