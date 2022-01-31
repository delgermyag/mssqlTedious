const Pricelists = require("./Pricelists");

module.exports = (sequelize, Sequelize) => {
    const PricelistDate = sequelize.define('PricelistDate', {
        PricelistDateID: {
            type: Sequelize.INTEGER,
            references: {
                model: Pricelists,
                key: 'PricelistDateID'
            }
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