const Pricelists = require("./Pricelists");

module.exports = (sequelize, Sequelize) => {
    const PricelistDate = sequelize.define('PricelistDate', {
        PricelistDateID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        PricelistDate: {
            type: Sequelize.DATEONLY
        },
        CreatedDate: {
            type: Sequelize.DATEONLY
        }
    });

    return PricelistDate;
};