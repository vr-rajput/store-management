const express = require('express');
const dotenv = require('dotenv').config();
const db = require('./config/database');

const app = express();

db.sequelize.sync();

app.get('/', (req ,res)=>{
    res.send('welcome to backend !')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Back-end is running`);
})