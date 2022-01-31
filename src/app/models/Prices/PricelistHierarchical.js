const Pricelists = require("./Pricelists");

module.exports = (sequelize, Sequelize) => {
    const PricelistHierarchical = sequelize.define('PricelistHierarchical', {
        PricelistTypeID :{
            type: Sequelize.INTEGER,
            references: {
                model: Pricelists,
                key: 'PricelistTypeID'
            }
        },
        Percent: {
            type: Sequelize.INTEGER
        },
        Treshhold: {
            type: Sequelize.STRING
        },
        StartDate: {
            type: Sequelize.DATEONLY
        },
        EndDate: {
            type: Sequelize.DATEONLY
        }
    });

    return PricelistHierarchical;
};