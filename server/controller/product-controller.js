const db  = require('../config/database');


const getAllProducts = async (req, res) => {
    try {
       const getProducts =  await db.Product.findAll();
        return res.status(200).send(getProducts);
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllProducts };