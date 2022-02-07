module.exports = (sequelize, Sequelize) => {
    const PromoTradeshops = sequelize.define('PromoTradeshops', {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        PromoID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Promos',
                key: 'PromoID'
            }
        },
        TradeshopID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Tradeshops',
                key: 'TradeshopID'
            }
        },
        CreatedDate: {
            type: Sequelize.DATEONLY
        },
        WarehouseID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Warehouses',
                key: 'WarehouseID'
            }
        }
    });

    return PromoTradeshops;
};