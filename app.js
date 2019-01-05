const express = require('express');
const mongoose = require('mongoose');

const userModel = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;
const user = require('./router/user/index');


app.use('/user', user);




app.listen(port, () => {
    console.log(`Server is running`);
})
