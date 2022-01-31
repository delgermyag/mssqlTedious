const Pricelists = require("./Pricelists");
const Products = require("../Products/Products");

module.exports = (sequelize, Sequelize) => {
    const PricelistsHistory = sequelize.define('PricelistsHistory', {
        PricelistTypeID: {
            type: Sequelize.INTEGER,
            references: {
                model: Pricelists,
                key: 'PricelistTypeID'
            }
        },
        ProductID: {
            type: Sequelize.INTEGER,
            references: {
                model: Products,
                key: 'ProductID'
            }
        },
        Price: {
            type: Sequelize.INTEGER
        },
        PricelistDateID :{
            type: Sequelize.INTEGER,
            references: {
                model: Pricelists,
                key: 'PricelistDateID'
            }
        },
        CreatedDate: {
            type: Sequelize.DATEONLY
        }
    });

    return PricelistsHistory;
};