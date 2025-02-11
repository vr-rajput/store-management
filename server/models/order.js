const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Order = sequelize.define("Order", {
    customerName: {
      type: DataTypes.STRING,
    },
    customerEmail: {
      type: DataTypes.STRING,
    },
    customerNumber: {
      type: DataTypes.STRING,
    },
    totalPrice: {
      type: DataTypes.STRING,
    },
    totalQuantity: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING,
    },
    paymentMethod: {
      type: DataTypes.STRING
    },
    orderId: {
      type: DataTypes.STRING,
      unique: true
    }

  }, {
    //tableName: "", // Custom table name
    timestamps: true,  // Adds createdAt and updatedAt fields
  })

  return Order;
}


