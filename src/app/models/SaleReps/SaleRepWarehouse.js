const { sequelize, Sequelize, Warehouse } = require("..");
const SaleReps = require("./SaleReps");

module.exports = (sequelize, Sequelize) => {
    const SaleRepWarehouse = sequelize.define('SaleRepWarehouse', {
        SaleRepID: {
            type: Sequelize.INTEGER,
            references: {
                model: SaleReps,
                key: 'SaleRepID'
            }
        },
        WarehouseID: {
            type: Sequelize.INTEGER,
            references: {
                model: Warehouse,
                key: 'WarehouseID'
            }
        }
    });

    return SaleRepWarehouse;
};