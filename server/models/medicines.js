const { DataTypes, ForeignKeyConstraintError } = require('sequelize');
const AdminModel = require('./admin');


module.exports = (sequelize) => {
    const Admin = AdminModel(sequelize);
    const medicine = sequelize.define('medicine', {
        storeName: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                module: Admin,
                key: 'storeName'
            }
        },
        title: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        inventory: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.FLOAT
        },
        mfr: {
            type: DataTypes.DATE
        },
        exp: {
            type: DataTypes.DATE
        }


    })

    Admin.hasMany(medicine, { foreignKey: 'storeName', as: 'medicines' });
    medicine.belongsTo(Admin, { foreignKey: 'storeName', as: 'admin' });
    return medicine;
}

