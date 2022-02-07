module.exports = (sequelize, Sequelize) => {
    const WarehouseTypes = sequelize.define('WarehouseTypes', {
        WarehouseTypeID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        WarehouseTypeName: {
            type: Sequelize.STRING
        }
    });

    return WarehouseTypes;
};