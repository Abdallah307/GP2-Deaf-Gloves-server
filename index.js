const express = require('express');
const app = express();
const router = require('./converter')



app.use('/api', router)



const server = app.listen(3000);
const io = require('./socket').init(server)
