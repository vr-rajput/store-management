const db = require('../config/database');

// create medicine 
const orderItemCreate = async (createData) => {
  try {
    const orderitem = await db.productOrder.bulkCreate(createData)
    return orderitem;
  } catch (error) {
    console.error('Error in repository while creating medicine:', error.message);
    throw error
  }
}

module.exports = { orderItemCreate };