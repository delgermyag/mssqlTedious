module.exports = (sequelize, Sequelize) => {
    const Warehouse = sequelize.define('Warehouse', {
        WarehouseID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        WarehouseName: {
            type: Sequelize.STRING
        },
        WarehouseTypeID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'WarehouseTypes',
                key: 'WarehouseTypeID'
            }
        }
    });

    return Warehouse;
};