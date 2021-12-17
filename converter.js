const io = require('./socket')
const express = require('express')
const router = express.Router()

router.get('/convert/:word', (req, res, next) => {
    const {word} = req.params
    io.getIO().emit('convert', word)
    return res.send("")
})

 


module.exports = router  