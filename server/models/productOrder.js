const { DataTypes } = require('sequelize');
const medicines = require('./medicines');
module.exports = (sequelize) => {

  const Order = require('./order')(sequelize);
  const Medicines = require('./medicines')(sequelize)
  const productOrder = sequelize.define("productOrder", {

    itemCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Medicines,
        key: 'itemCode'
      },

    },
    productTitle: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    subtotal: {
      type: DataTypes.STRING,
    },
    orderId: {
      type: DataTypes.STRING,
      references: {
        model: Order,
        key: 'orderId'
      }
    },
  }, {
    timestamps: true,  // Adds createdAt and updatedAt fields
  })

  Order.hasMany(productOrder, { foreignKey: 'orderId' });
  // productOrder.belongsTo(Order, { foreignKey: 'orderId' });
  productOrder.belongsTo(Order, { foreignKey: 'orderId' });

  // productOrder.belongsTo(Medicines, { foreignKey: 'itemCode' })
  Medicines.hasMany(productOrder, { foreignKey: 'itemCode' });
  productOrder.belongsTo(Medicines, { foreignKey: 'itemCode' });



  return productOrder;
}

