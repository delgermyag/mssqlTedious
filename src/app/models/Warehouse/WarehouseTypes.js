const Warehouse = require("./Warehouse");

module.exports = (sequelize, Sequelize) => {
    const WarehouseTypes = sequelize.define('WarehouseTypes', {
        WarehouseTypeID: {
            type: Sequelize.INTEGER,
            references: {
                model: Warehouse,
                key: 'WarehouseTypeID'
            }
        },
        WarehouseTypeName: {
            type: Sequelize.STRING
        }
    });

    return WarehouseTypes;
};