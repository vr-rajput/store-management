const { where } = require('sequelize/lib/sequelize');
const medicineRepository = require('../dao/medicineRepository');


const getMedicine = async (req, res) => {
    try {
        const getMedicine = await medicineRepository.getAllMedicine(req.query.storeName);
        console.log(getMedicine)
        return res.status(200).json({ msg: "successfully get data ", getMedicine });
    } catch (error) {
        console.error('Error fetching medicines:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Costum paginetion
const getAllMedicinePaginated = async (req, res) => {
    try {
        const { searchTerm, page, size } = req.query;
        const limit = parseInt(size, 10);
        const offset = (parseInt(page, 10) - 1) * limit;

        // fetch paginated data 
        const data = await medicineRepository.getPaginatedMedicine(searchTerm, limit, offset);
        res.status(201).json({ data })
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

const medicineCreate = async (req, res) => {
    try {
        console.log("vcreeate")
        const { title, type, inventory, price, storeName, itemCode } = req.body;
        const createData = {
            title,
            type,
            inventory,
            price,
            storeName,
            itemCode,
        }
        const newMedicine = await medicineRepository.createMedicine(createData);
        return res.status(201).json(newMedicine)
    } catch (error) {
        console.log('error', error)
    }
}


const updateData = async (req, res) => {
    try {
        const id = req.params;
        // console.log(typeof(id))
        const updateDatafields = req.body;
        const t = await medicineRepository.updateMedicine(updateDatafields, id);
        res.status(200).json({ msg: 'Data insert successfull !' })
    } catch (error) {
        console.log('Error :', error.message)
        throw error;
    }
}

const deleteData = async (req, res) => {
    try {
        const id = req.params;
        console.log(id)
        const removeRow = await medicineRepository.removeData(id)
        console.log(removeRow)
        res.status(200).json({ msg: "delete data successfuly!" })
    } catch (error) {
        res.status(400).json({ msg: "cannot remeve data to database" })
    }
}






module.exports = {
    getMedicine,
    medicineCreate,
    updateData,
    deleteData,
    getAllMedicinePaginated
};