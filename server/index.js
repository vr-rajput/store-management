require('dotenv').config();
const verifyToken = require('./middleware/authMiddleware')
const express = require('express');
const config = require('./config/index')
const userRouter = require('./routes/user-Router');
const db = require('./config/database');
const medicineRouter = require('./routes/medicine-router');
const cors = require('cors')


const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())
app.use(verifyToken)

db.sequelize.sync({ alter: true });

// router all
app.use('/mgt/admin', userRouter);
app.use('/mgt/medicine', medicineRouter)

// app listen 
app.listen(config?.port, () => {
    console.log(`Back-end is running`, config?.port);
})