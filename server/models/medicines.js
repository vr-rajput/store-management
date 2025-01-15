const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('medicine', {
        title: {
            type: DataTypes.STRING
        },
        type:{
            type: DataTypes.STRING
        },
        inventory: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.FLOAT
        }
    }
        
)
}

