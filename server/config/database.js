const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const obj = {
    host: process.env.DB_HOST,
    dialect: process.env.dialect,
    logging : false
}

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,obj)

const db = {sequelize: sequelize }


// all modle call 
db.medicines = require('../models/medicines')(sequelize)
db.admin = require('../models/admin')(sequelize)



module.exports = db;

