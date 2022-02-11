const Pricelists = require("./Pricelists");

module.exports = (sequelize, Sequelize) => {
    const PricelistDate = sequelize.define('PricelistDate', {
        PricelistDateID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        PricelistDate: {
            type: Sequelize.DATE
        },
        CreatedDate: {
            type: Sequelize.DATE
        }
    });

    return PricelistDate;
};