const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Admin = sequelize.define('admin', {
        storeName: {
            type: DataTypes.STRING,
            unique: true,
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
    return Admin;
}