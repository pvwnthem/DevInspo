const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('read the api docs at ----')
}
)

module.exports = router