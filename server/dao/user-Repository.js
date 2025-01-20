const db = require('../config/database');

const createUser = async (userInfo) => {
  try {
    return await db.admin.create(userInfo)
  } catch (error) {
    console.log('Error ', error)
  }
}

module.exports = { createUser };

