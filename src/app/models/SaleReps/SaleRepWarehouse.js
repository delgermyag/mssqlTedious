module.exports = (sequelize, Sequelize) => {
    const SaleRepWarehouse = sequelize.define('SaleRepWarehouse', {
        SaleRepID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'SaleReps',
                key: 'SaleRepID'
            }
        },
        WarehouseID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Warehouses',
                key: 'WarehouseID'
            }
        }
    });

    return SaleRepWarehouse;
};