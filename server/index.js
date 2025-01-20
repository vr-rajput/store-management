require('dotenv').config();
const express = require('express');
const config = require('./config/index')
const userRouter = require('./routes/user-Router');
const db = require('./config/database');
// const getAllMedicines = require('./routes/medicine-router');


const app = express();
// Middleware to parse JSON bodies
app.use(express.json());

db.sequelize.sync({ alter: true });

app.use('/mgt/admin', userRouter);
// app.use('/getAllMedicines', getAllMedicines)




app.listen(config?.port, () => {
    console.log(`Back-end is running`);
})