module.exports = (sequelize, Sequelize) => {
    const WarehouseResidues = sequelize.define('WarehouseResidues', {
        WarehouseID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Warehouses',
                key: 'WarehouseID'
            }
        },
        ProductID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Products',
                key: 'ProductID'
            }
        },
        Quantity: {
            type: Sequelize.INTEGER
        },
        UID: {
            type: Sequelize.STRING
        }
    });

    return WarehouseResidues;
};