const Promo = require("./Promo");
const Tradeshops = require("../Customers/Tradeshops");
const Warehouse = require("../Warehouse/Warehouse");

module.exports = (sequelize, Sequelize) => {
    const PromoTradeshops = sequelize.define('PromoTradeshops', {
        ID: {
            type: Sequelize.INTEGER
        },
        PromoID: {
            type: Sequelize.INTEGER,
            references: {
                model: Promo,
                key: 'PromoID'
            }
        },
        TradeshopID: {
            type: Sequelize.INTEGER,
            references: {
                model: Tradeshops,
                key: 'TradeshopID'
            }
        },
        CreatedDate: {
            type: Sequelize.DATEONLY
        },
        WarehouseID: {
            type: Sequelize.INTEGER,
            references: {
                model: Warehouse,
                key: 'WarehouseID'
            }
        }
    });

    return PromoTradeshops;
};