const { where, Op } = require('sequelize');
const db = require('../config/database');

const createUser = async (userInfo) => {
  try {
    return await db.admin.create(userInfo)
  } catch (error) {
    console.log('Error ', error)
    throw error;
  }
}

const getBuyEmail = async ({ storeName, email }) => {
  try {
    return await db.admin.findOne({
      where: {
        [Op.or]: [
          { storeName: storeName, email: email },
          { storeName: storeName },
          { email: email }
        ]
      }
    })
  } catch (error) {
    throw error;
  }
}

const getByStore = async (storeName, email) => {
  return await db.admin.findOne({
    where: {
      storeName: storeName,
      email: email
    }
  })
}
module.exports = { createUser, getBuyEmail, getByStore };

