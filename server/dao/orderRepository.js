const db = require('../config/database');

// create medicine 
const orderCreate = async (createData) => {
  // console.log('createData>>>>>>', createData);
  try {
    const newMedicine = await db.order.create(createData);
    // console.log('newMedicine>>>>>', newMedicine)
    return newMedicine;
  } catch (error) {
    console.error('Error in repository while creating medicine:', error);
    throw error
  }
}

module.exports = { orderCreate }