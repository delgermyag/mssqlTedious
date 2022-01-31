const Pricelists = require("./Pricelists");

module.exports = (sequelize, Sequelize) => {
    const PricelistTypes = sequelize.define('PricelistTypes', {
        PricelistTypeID: {
            type: Sequelize.INTEGER,
            references: {
                model: Pricelists,
                key: 'PricelistTypeID'
            }
        },
        Name: {
            type: Sequelize.STRING
        },
        CreatedDate: {
            type: Sequelize.DATEONLY
        },
        isHierarchical: {
            type: Sequelize.BOOLEAN
        }
    });

    return PricelistTypes;
};