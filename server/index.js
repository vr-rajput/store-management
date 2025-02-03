require('dotenv').config();
const verifyToken = require('./middleware/authMiddleware')
const express = require('express');
const config = require('./config/index')
const userRouter = require('./routes/user-Router');
const medicineRouter = require('./routes/medicine-router');
const orderOrder = require('./routes/order-router')
const { paymentGetway } = require('./routes/paymentgetway-router');
const db = require('./config/database');
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
app.use('/mgt/order', orderOrder)
app.use('/mgt', paymentGetway)


// app listen 
app.listen(config?.port, () => {
    console.log(`Back-end is running`, config?.port);
})