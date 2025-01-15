const express = require('express');
const dotenv = require('dotenv').config();
const db = require('./config/database');
const userrouter = require('./routes/user');
const getAllMedicines = require('./routes/medicine-router');


const app = express();
// Middleware to parse JSON bodies
app.use(express.json());


app.use('/user', userrouter);
app.use('/getAllMedicines', getAllMedicines)


db.sequelize.sync({ alter: true });


app.listen(process.env.PORT || 4000, () => {
    console.log(`Back-end is running`);
})