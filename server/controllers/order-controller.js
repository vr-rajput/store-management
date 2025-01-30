const db = require('../config/database');
const medicineRepository = require('../dao/medicineRepository');

const order = async (req, res) => {
  const { itemCode, qty } = req.query; // 2 fields itemCode and quntity
  //[{itemCodeC : 101},{qty : 2}]
  //console.log(itemCode, qty)
  const medicinerepo = await medicineRepository.getItemByCode(itemCode, qty);
  return res.status(200).json({ msg: "Empty message", medicinerepo });
}

module.exports = { order }; 