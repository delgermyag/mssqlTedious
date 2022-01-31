module.exports = (sequelize, Sequelize) => {
    const SaleRepTradeShops = sequelize.define('SaleRepTradeShops', {
        SaleRepID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'SaleReps',
                key: 'SaleRepID'
            }
        },
        TradeShopID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'TradeShops',
                key: 'TradeShopID'
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
            type: Sequelize.DATEONLY
        }
    });

    return SaleRepTradeShops;
};