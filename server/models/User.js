const { Sequelize } = require("sequelize")

module.exports = (sequelize)=>{
    return sequelize.define('user',{
        user_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique : true
        },
        email_id:{
            type: Sequelize.STRING
        },
        passowrd:{
            type: Sequelize.STRING
        },
        user_mobilenumber:{
            type: Sequelize.INTEGER
        },
        
    })
}