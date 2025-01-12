const Sequelize = require('sequelize');

module.exports = (sequelize)=>{
    return sequelize.define('registration',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usename:{
            type:Sequelize.STRING,
            allowNull: false
        },
        email:{
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        },
        storename: {
            type:Sequelize.STRING
        }
    })
}

