module.exports = (sequelize, Sequelize) => {
    const SaleRepTradeShops = sequelize.define('SaleRepTradeShops', {
        SaleRepID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'SaleReps',
                key: 'SaleRepID'
            }
        },
        TradeshopID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Tradeshops',
                key: 'TradeshopID'
            }
        },
        ProductGroupID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'ProductGroups',
                key: 'ProductGroupID'
            }
        },
        UID: {
            type: Sequelize.STRING
        },
        CreatedDate: {
            type: Sequelize.DATE
        }
    });

    return SaleRepTradeShops;
};