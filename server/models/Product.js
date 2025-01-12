const { DataTypes } = require('sequelize'); 
const {sequelize} = require('../config/database');

const product = sequelize.define('product',{

    product_id: {
        type:DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement :true
    },
    title: {
        type: DataTypes.STRING
    },
    price: {
        type : DataTypes.FLOAT
    },
    inventory :{
        type: DataTypes.INTEGER
    },
    type: {
        type:DataTypes.STRING
    },
    Mfr_date: {
        type: DataTypes.DATETIME
    },
    Exp_date: {
        type:DataTypes.DATETIME
    }
})