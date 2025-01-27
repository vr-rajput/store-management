const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Admin = sequelize.define('admin', {
        storeName: {
            type: DataTypes.STRING,
            unique: false,
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
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Admin;
}