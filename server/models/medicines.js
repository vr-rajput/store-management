const { DataTypes, htmlForeignKeyConstraintError } = require('sequelize');
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
        }


    })

    Admin.hasMany(medicine, { htmlForeignKey: 'storeName', as: 'medicines' });
    medicine.belongsTo(Admin, { htmlForeignKey: 'storeName', as: 'admin' });
    return medicine;
}

