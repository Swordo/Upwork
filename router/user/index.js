const express = require('express');
const router = express.Router();
const userModel = require('../../models/user');



router.get('/', (req, res) => {
    res.send('Hello from roter');
})
router.post('/', (req, res) => {
    res.send('hello')
})


module.exports = router;