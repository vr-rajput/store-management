const { where } = require('sequelize');
const db = require('../config/database');

//get all Medicine to database .
const getAllMedicine = async (storeName) => {
    try {
        const allMedicin = await db.medicines.findAll({ where: { storeName: storeName } });
        return allMedicin;
    } catch (error) {
        console.log('data not featch to database', error.message)
        throw error;
    }
}

// get paginated Medicine 
const getPaginatedMedicine = async (limit, size) => {
    try {
        return await db.medicines.findAndCountAll(limit, size)
    } catch (error) {
        console.log(error)
        throw error
    }
}

// create medicine 
const createMedicine = async (createData) => {
    try {
        const newMedicine = await db.medicines.create(createData)
        return newMedicine;
    } catch (error) {
        console.error('Error in repository while creating medicine:', error.message);
        throw new Error('Failed to create medicine');
    }
}

//update medicine
const updateMedicine = async (updateDatafields, id) => {
    try {
        // console.log("id ",id , "updta",updateDatafields)
        const upDate = await db.medicines.update(updateDatafields, {
            where: id
        });
        //    console.log(upDate)
    } catch (error) {
        console.log('Error not update fields ', error.message);
        throw error;
    }
}


const removeData = async (id) => {
    try {
        const deleteDataRow = await db.medicines.destroy({ where: id })
    } catch (error) {
        console.log("Error", error.message);
        throw error;
    }
}


module.exports = {
    getAllMedicine,
    createMedicine,
    updateMedicine,
    removeData,
    getPaginatedMedicine
}