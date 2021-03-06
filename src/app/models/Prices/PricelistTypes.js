module.exports = (sequelize, Sequelize) => {
    const PricelistTypes = sequelize.define('PricelistTypes', {
        PricelistTypeID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Name: {
            type: Sequelize.STRING
        },
        CreatedDate: {
            type: Sequelize.DATE
        },
        isHierarchical: {
            type: Sequelize.BOOLEAN
        }
    });

    return PricelistTypes;
};