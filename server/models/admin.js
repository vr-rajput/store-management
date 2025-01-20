const { Sequelize, DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    return sequelize.define('admin', {
        storeName: {
            type: DataTypes.STRING,
        },
        userName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
        },
        number: {
            type: DataTypes.INTEGER
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}