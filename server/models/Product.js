const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('product', {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.FLOAT
        },
        inventory: {
            type: DataTypes.INTEGER
        },
        type: {
            type: DataTypes.STRING
        },
    },
    {
        createdAt: false,
        updatedAt: false,
    }
)
}

