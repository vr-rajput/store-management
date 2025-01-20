const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const config = require('../config/index')
dotenv.config();

const obj = {
    host: config?.db_host,
    dialect: config?.dialect,
    logging: false
}

const sequelize = new Sequelize(config?.db_name, config?.db_user, config?.db_password, obj)

const db = { sequelize: sequelize }


// all modle call 
db.medicines = require('../models/medicines')(sequelize)
db.admin = require('../models/admin')(sequelize)



module.exports = db;

