const express = require('express');
const dotenv = require('dotenv').config();
const db = require('./config/database');
const userrouter = require('./routes/user');
const product = require('./routes/product-router');

const app = express();


app.use('/user', userrouter);
app.use('/product', product)


db.sequelize.sync({alter : true});


app.listen(process.env.PORT || 4000, ()=>{
    console.log(`Back-end is running`);
})